import React from 'react';
import { useState } from 'react';
import InputData from '../components/InputData';
function DeleteBatch() {
  const [codeBatch, setCodeBatch] = useState('');
  const [resultMessage, setResultMessage] = useState('');
  const [messageColor, setMessageColor] = useState('');

  const submitBatch = () => {
    if (codeBatch === '') {
      setResultMessage('El lote seleccionado no se ha encontrado');
      setMessageColor('red');
    } else {
      setResultMessage(
        `El lote con código "${codeBatch}" ha sido eliminado correctamente.`
      );
      setMessageColor('green');
      setCodeBatch('');
    }
  };

  return (
    <>
      <div>
        <h2>Eliminar Lote de sangre</h2>
        <InputData
          id="code-batch"
          value={codeBatch}
          onChange={(e) => setCodeBatch(e.target.value)}
        >
          Código del Lote:
        </InputData>
        <button onClick={submitBatch}>Agregar</button>
      </div>
      <div id="result" style={{ color: messageColor }}>
        {resultMessage}
      </div>
    </>
  );
}

export default DeleteBatch;
