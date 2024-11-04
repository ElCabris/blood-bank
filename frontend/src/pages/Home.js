import React from 'react';
import Slider from '../components/Slider';
import './Home.css';
import imagen1 from '../media/paso1.png';
import imagen2 from '../media/paso2.png';
import imagen3 from '../media/paso3.png';
import imagen4 from '../media/paso4.png';

const images = [
  {
    url: 'https://img.freepik.com/foto-gratis/hombre-dando-adorno-rojo-corazon-mujer_23-2148001567.jpg',
    text: 'Una donación puede salvar hasta tres vidas',
  },
  {
    url: 'https://d100mj7v0l85u5.cloudfront.net/s3fs-public/2022-08/donacion-de-sangre.png',
    text: 'Donar sangre no solo ayuda a otros, también revitaliza tu salud',
  },
  {
    url: 'https://img.freepik.com/foto-gratis/personas-mirando-album-fotos_23-2149548424.jpg',
    text: 'Una donación puede ser el comienzo de muchas historias de vida',
  },
];

function Home() {
  return (
    <>
      <main>
        <Slider image1={images[0]} image2={images[1]} image3={images[2]} />
      </main>

      {/*proceso de donacion*/}
      <section className="StepsDonation">
        <StepDonation
          description="Los donantes interesados deben registrarse. Esto puede incluir 
				completar un formulario con información personal, como nombre, dirección y número de contacto."
        >
          Paso 1: Registro<br></br>
          <img src={imagen1} alt="imagen1"></img>
        </StepDonation>
        <StepDonation
          description="Se realiza una evaluación preliminar para asegurarse de que el donante 
				sea elegible. Esto incluye preguntas sobre la salud general, historial médico, y factores de riesgo."
        >
          Paso 2: Evaluación inicial<br></br>
          <img src={imagen2} alt="imagen2"></img>
        </StepDonation>
        <StepDonation
          description="Si el donante es elegible, se procede a la donación. Se utiliza una aguja 
				estéril para extraer sangre, generalmente de un brazo. El proceso suele durar entre 10 y 15 minutos."
        >
          Paso 3: Donación<br></br>
          <img src={imagen3} alt="imagen3"></img>
        </StepDonation>
        <StepDonation
          description="Después de la donación, se ofrece un breve período de descanso donde el donante 
				puede consumir refrigerios y líquidos para ayudar a la recuperación."
        >
          Paso 4: Recuperación<br></br>
          <img src={imagen4} alt="imagen4"></img>
        </StepDonation>
      </section>
      {/*Sección de preguntas frecuentes*/}
      <section className="PreguntasFrecuentes">
        <div>
          <h2>Preguntas Frecuentes</h2>
          <ul>
            <Question
              question="¿Cómo puedo donar sangre?"
              answer="Puedes donar sangre registrándolte en nuestro sitio web y eligiendo una fecha para donar."
            />
            <Question
              question="¿Cada cuánto puedo donar?"
              answer="Los hombres pueden donar cada 3 meses y las mujeres cada 4 meses."
            />
            <Question
              question="¿Es seguro donar sangre?"
              answer="Sí, la donación de sangre es completamente segura y todos los materiales utilizados son estériles y desechables"
            />
            <Question
              question="¿Cuánto tiempo dura el proceso de donación"
              answer="El proceso completo, desde el registro hasta la recuperación, toma aproximadamente 45 minutos."
            />
          </ul>
        </div>
        <img
          src="https://hospitalmalvinas.gov.co/wp-content/uploads/2023/08/Donating-Blood_In-Blog-Image-2.jpg"
          alt="Donación de sangre"
        ></img>
      </section>
    </>
  );
}

function StepDonation({ children, description, ...args }) {
  return (
    <div {...args}>
      <h3>{children}</h3>
      <p>{description}</p>
    </div>
  );
}

function Question({ question, answer }) {
  return (
    <li>
      <strong>{question}</strong>
      <p>{answer}</p>
    </li>
  );
}

export default Home;
