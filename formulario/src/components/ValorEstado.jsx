import React from "react";

const ValorEstado = (props) => {
  const { estado, titulo } = props;
  return (
    <>
      <div>
        <h3>Valor del estado {titulo ? titulo : "actual"}.</h3>
        <pre>{JSON.stringify(estado, null, 2)}</pre>
      </div>
    </>
  );
};

export default ValorEstado;
