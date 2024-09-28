import React, {useState} from 'react';
import Slider from '../components/Slider'
const images = [
	{
		url: 'https://img.freepik.com/foto-gratis/hombre-dando-adorno-rojo-corazon-mujer_23-2148001567.jpg',
		text: 'Una donación puede salvar hasta tres vidas'
	},
	{
		url: 'https://img.freepik.com/foto-gratis/joven-medico-masculino-paciente-medir-presion-sanguinea_1303-17877.jpg',
		text: 'Donar sangre no solo ayuda a otros, también revitaliza tu salud'
	},
	{
		url: 'https://img.freepik.com/foto-gratis/personas-mirando-album-fotos_23-2149548424.jpg',
		text: 'Una donación puede ser el comienzo de muchas historias de vida'
	}
];

function Home() {
	return (
		<>
			<main>
				<Slider images={images}/>
			</main>

			{/*proceso de donacion*/}
			<section>
				<StepDonation description="Registro">Paso 1</StepDonation>
				<StepDonation description="Examen médico">Paso 2</StepDonation>
				<StepDonation description="Donación">Paso 3</StepDonation>
				<StepDonation description="Recuperación">Paso 4</StepDonation>
			</section>
			{/*Sección de preguntas frecuentes*/}
			<section>
				<div>
					<div>
						<h2>Preguntas Frecuentes</h2>
						<ul>
							<Question
								question="¿Cómo puedo donar sangre?"
								answer="Puedes donar sangre registrándolte en nuestro sitio web y eligiendo una fecha para donar." />
							<Question
								question="¿Cada cuánto puedo donar?"
								answer="Los hombres pueden donar cada 3 meses y las mujeres cada 4 meses." />
							<Question
								question="¿Es seguro donar sangre?"
								answer="Sí, la donación de sangre es completamente segura y todos los materiales utilizados son estériles y desechables" />
							<Question
								question="¿Cuánto tiempo dura el proceso de donación"
								answer="El proceso completo, desde el registro hasta la recuperación, toma aproximadamente 45 minutos." />
						</ul>
					</div>
					<div>
						<img src='https://img.freepik.com/foto-gratis/enfermera-experta-esta-haciendo-analisis-sangre-hombre-clinica-hombre-mascara-medica_1157-48824.jpg?t=st=1727067235~exp=172707083%20%20%20%20%20%205~hmac=47d1dec242b215dc29f8508af7ecfd02ce81d57c5d6f3c80515ac03dc7eecc9e&w=360' alt="Donación de sangre"></img>
					</div>
				</div>
			</section>
		</>
	);
}

function StepDonation({children, description, ...args}) {
	return (
		<div {...args}>
			<h3>{children}</h3>
			<p>{description}</p>
		</div>
	);
}

function Question({question, answer}) {
	return (
		<li>
			<strong>{question}</strong>
			<p>{answer}</p>
		</li>

	);
}

export default Home;
