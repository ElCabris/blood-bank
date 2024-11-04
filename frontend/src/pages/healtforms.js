// HealthForm.js
import React from 'react';
import './Login.css';

const HealthForm = () => {
  return (
    <div className="Form">
      <h1>Cuestionario de Salud</h1>
      <form>
        <div className="form-group">
          <label>
            ¿Tienes alguna condición crónica, como diabetes, hipertensión o
            problemas cardíacos?
          </label>
          <input type="text" name="condition" />
        </div>
        <div className="form-group">
          <label>
            ¿Has tenido fiebre, resfriados o alguna infección recientemente?
          </label>
          <input type="text" name="recentInfection" />
        </div>
        <div className="form-group">
          <label>¿Estás tomando algún medicamento actualmente? ¿Cuáles?</label>
          <input type="text" name="medications" />
        </div>
        <div className="form-group">
          <label>
            ¿Has sido diagnosticado/a con alguna enfermedad contagiosa, como
            hepatitis, VIH o tuberculosis?
          </label>
          <input type="text" name="contagiousDisease" />
        </div>
        <div className="form-group">
          <label>
            ¿Has recibido alguna transfusión de sangre o donado sangre
            anteriormente?
          </label>
          <input type="text" name="bloodTransfusion" />
        </div>
        <div className="form-group">
          <label>
            ¿Has donado sangre antes? ¿Tuviste alguna reacción después de la
            donación?
          </label>
          <input type="text" name="bloodDonation" />
        </div>
        <div className="form-group">
          <label>
            ¿Tienes tatuajes, piercings o has recibido alguna inyección en el
            último año en condiciones no médicas?
          </label>
          <input type="text" name="bodyModifications" />
        </div>
        <div className="form-group">
          <label>
            ¿Tienes problemas de circulación o has experimentado alguna vez
            síntomas como hinchazón en piernas o pies, o sensación de hormigueo
            en las extremidades?
          </label>
          <input type="text" name="circulationIssues" />
        </div>
        <div className="form-group">
          <label>
            ¿Has notado cambios recientes en tu peso o en tu apetito que no
            puedas atribuir a una causa específica?
          </label>
          <input type="text" name="weightChanges" />
        </div>
        <div className="form-group">
          <label>
            ¿Te han diagnosticado o tratado por alguna infección o condición que
            debilite tu sistema inmunológico, como una infección recurrente o
            una enfermedad autoinmune?
          </label>
          <input type="text" name="immuneIssues" />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default HealthForm;
