 // URL de la API (usa la que indicaste)
    const API_BASE = 'https://swapi.info/api';

    // Fallback para generar UUID v4 si crypto.randomUUID no está disponible
    function uuidv4_fallback() {
      // usa crypto.getRandomValues si está disponible
      if (window.crypto && window.crypto.getRandomValues) {
        const a = new Uint8Array(16);
        crypto.getRandomValues(a);
        // Ajustes por RFC4122 v4
        a[6] = (a[6] & 0x0f) | 0x40;
        a[8] = (a[8] & 0x3f) | 0x80;
        const toHex = (n) => n.toString(16).padStart(2, '0');
        return [...a].map(toHex).join('').replace(
          /^(.{8})(.{4})(.{4})(.{4})(.{12})$/,
          '$1-$2-$3-$4-$5'
        );
      } else {
        // fallback menos seguro (no recomendado fuera de pruebas)
        return 'xxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c){
          const r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);
          return v.toString(16);
        });
      }
    }

    function makeUUID(){
      if (crypto && typeof crypto.randomUUID === 'function') {
        try { return crypto.randomUUID(); } catch(e){ /* caiga al fallback */ }
      }
      return uuidv4_fallback();
    }

    // Obtener elementos DOM
    const filmsList = document.getElementById('films');
    const loadingNote = document.getElementById('loading');
    const detailsEmpty = document.getElementById('detailsEmpty');
    const detailsContent = document.getElementById('detailsContent');

    // Campos detalle
    const dId = document.getElementById('detail-id');
    const dRelease = document.getElementById('detail-release');
    const dDirector = document.getElementById('detail-director');
    const dProducer = document.getElementById('detail-producer');
    const dTitle = document.getElementById('detail-title');
    const dOpening = document.getElementById('detail-opening');

    // Formato fecha europea (DD/MM/YYYY)
    function formatFechaEuropea(dateString){
      const d = new Date(dateString);
      if (isNaN(d)) return dateString || '—';
      return d.toLocaleDateString('es-ES'); // usa día/mes/año
    }

    // Renderiza la lista y asigna uuid a cada película
    async function fetchAndRenderFilms(){
      loadingNote.style.display = 'block';
      try {
        const res = await fetch(`${API_BASE}/films`);
        if (!res.ok) throw new Error('Respuesta de la API no OK: ' + res.status);
        const data = await res.json();

        // Compatibilidad: la API puede devolver {results: [...] } o {films:[...]}.
        let films = [];
        if (Array.isArray(data)) films = data;
        else if (Array.isArray(data.results)) films = data.results;
        else if (Array.isArray(data.films)) films = data.films;
        else {
          // intenta localizar un array dentro del objeto
          for (const k in data) {
            if (Array.isArray(data[k])) { films = data[k]; break; }
          }
        }

        // Si no hay films, muestra mensaje
        if (!films || films.length === 0) {
          filmsList.innerHTML = '<li class="fallback-note">No se encontraron películas en la respuesta de la API.</li>';
          loadingNote.style.display = 'none';
          return;
        }

        // Añadir uuid a cada película y render
        films.forEach((film, idx) => {
          // Genera y salva uuid en la propia instancia de objeto
          film.__uuid = makeUUID();

          const li = document.createElement('li');
          li.className = 'film';
          li.tabIndex = 0;
          li.id = `film-${film.__uuid}`; // id DOM seguro
          li.dataset.uuid = film.__uuid;
          li.dataset.index = idx; // por si quieres usar index

          // Algunas APIs usan 'title' y 'opening_crawl' e 'release_date'
          const title = film.title || film.name || `Película ${idx+1}`;
          const opening = film.opening_crawl || film.opening || film.description || '';
          const release = film.release_date || film.date || '';

          li.innerHTML = `
            <div class="meta">
              <div class="id">ID: ${film.__uuid.slice(0,8)}</div>
              <div class="title">${escapeHtml(title)}</div>
            </div>
            <div class="meta">
              <small class="muted">${formatFechaShort(release)}</small>
            </div>
          `;

          // guarda objeto completo en dataset (stringify mínimo)
          li.dataset.opening = opening;
          li.dataset.title = title;
          li.dataset.release = release;
          li.dataset.director = film.director || film.director_name || '—';
          li.dataset.producer = film.producer || film.producer_name || '—';

          filmsList.appendChild(li);
        });

        // listener por delegación
        filmsList.addEventListener('click', onFilmClick);
        filmsList.addEventListener('keydown', (ev) => {
          if (ev.key === 'Enter' || ev.key === ' ') {
            const li = ev.target.closest('.film');
            if (li) onFilmSelect(li);
          }
        });

      } catch (err){
        filmsList.innerHTML = `<li class="fallback-note">Error al cargar datos: ${escapeHtml(err.message)}</li>`;
        console.error(err);
      } finally {
        loadingNote.style.display = 'none';
      }
    }

    // manejador click -> selecciona item
    function onFilmClick(e){
      const li = e.target.closest('.film');
      if (!li) return;
      onFilmSelect(li);
    }

    // muestra detalles
    function onFilmSelect(li){
      const uuid = li.dataset.uuid;
      const title = li.dataset.title;
      const opening = li.dataset.opening;
      const release = li.dataset.release;
      const director = li.dataset.director;
      const producer = li.dataset.producer;

      dId.textContent = `ID: ${uuid}`;
      dRelease.textContent = `Fecha: ${formatFechaEuropea(release)}`;
      dDirector.textContent = `Director: ${director}`;
      dProducer.textContent = `Productor: ${producer}`;
      dTitle.textContent = title;
      dOpening.textContent = opening || 'Sin sinopsis disponible.';

      detailsEmpty.style.display = 'none';
      detailsContent.style.display = 'block';

      // opcional: marcar seleccionado visualmente
      document.querySelectorAll('.film.selected').forEach(n => n.classList.remove('selected'));
      li.classList.add('selected');
    }

    // helper: string corto de fecha (YYYY -> DD/MM etc)
    function formatFechaShort(release) {
      if(!release) return '';
      try {
        const d = new Date(release);
        if (isNaN(d)) return release;
        return d.getFullYear();
      } catch(e){ return release; }
    }

    // helper para escapar HTML
    function escapeHtml(str){
      if (!str) return '';
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    }

    // Ejecuta la carga al iniciar
    fetchAndRenderFilms();