import Slider from 'react-slick';
import './DonationSites.css';

const DonationSites = () => {
	{/* datos ficticios*/}
	const bloodBanks = [
		{id: 1, name: 'Banco de Sangre A', city: 'Medellín', address: 'Calle 10 #23-45'},
		{id: 2, name: 'Banco de Sangre B', city: 'Bogotá', address: 'Carrera 7 #15-20'},
		{id: 3, name: 'Banco de Sangre C', city: 'Cali', address: 'Avenida 5 #50-60'},
		{id: 4, name: 'Banco de Sangre D', city: 'Cartagena', address: 'Calle 30 #12-34'},
		{id: 5, name: 'Banco de Sangre E', city: 'Barranquilla', address: 'Carrera 8 #22-18'},
	];
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	};
	return (
		<div className='donation-sites'>
			<h1>Sitios de Donación</h1>
			<Slider {...settings}>
				{bloodBanks.map(bank => (
					<div key={bank.id} className='blood-bank-card'>
						<h2>{bank.name}</h2>
						<p>{bank.city}</p>
						<p>{bank.address}</p>
						<button className="view-more-button">Ver más</button>
					</div>
				))}
			</Slider>
		</div>
	);
}

export default DonationSites;
