import React, { useState } from 'react';
import InputData from '../components/InputData';

function AddBatch() {
  const [codeBatch, setCodeBatch] = useState('');
  const [resultMessage, setResultMessage] = useState('');
  const [messageColor, setMessageColor] = useState('');

  const submitBatch = () => {
    // Condición temporal, cambiar cuando se conecte al backend
    if (codeBatch === '') {
      setResultMessage('Por favor, ingresa un código válido');
      setMessageColor('red');
    } else {
      setResultMessage(
        `El lote con código "${codeBatch}" ha sido agregado correctamente.`
      );
      setMessageColor('green');
      setCodeBatch(''); // Limpiar el input
    }
  };

  return (
    <>
      <div>
        <h2>Agregar Lote de sangre</h2>
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

export default AddBatch;
