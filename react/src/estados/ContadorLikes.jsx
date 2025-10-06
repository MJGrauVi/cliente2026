import React, { useState } from "react";
import "../estados/ContadorLikes.css";

const ContadorLikes = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  return (
    <div className="contadorlikes-container">
      <div>
        <h2>
          Contador de Likes
        </h2>

        <p>
          Likes: <strong>{likes}</strong>
        </p>
        <p>
          Dislikes: <strong>{dislikes}</strong>
        </p>

        <div className="contadorlikes-botones">
          <button
            onClick={() => setLikes(likes + 1)}
          >
            Like
          </button>
          <button
            onClick={() => setDislikes(dislikes + 1)}
          >
            Dislike
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContadorLikes;