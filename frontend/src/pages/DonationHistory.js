import './DonationHistory.css'
function DonationHistory() {
	const donationHistory = [
		{id: 1, date: '2023-08-10', bankName: 'Banco de Sangre A', certificateUrl: '/certificates/cert_1.pdf'},
		{id: 2, date: '2023-07-15', bankName: 'Banco de Sangre B', certificateUrl: '/certificates/cert_2.pdf'},
		{id: 3, date: '2023-06-22', bankName: 'Banco de Sangre C', certificateUrl: '/certificates/cert_3.pdf'},
		{id: 4, date: '2023-05-18', bankName: 'Banco de Sangre D', certificateUrl: '/certificates/cert_4.pdf'},
	];

	const handleDownload = (url) => {
		// Simulación de descarga, en un escenario real el URL llevaría a un archivo en el servidor
		window.open(url, '_blank');
	};

	return (
		<div className="history-container">
			<h2>Historial de Donaciones</h2>
			<table className="history-table">
				<thead>
					<tr>
						<th>Fecha</th>
						<th>Nombre del Banco</th>
						<th>Certificado</th>
					</tr>
				</thead>
				<tbody>
					{donationHistory.map((donation) => (
						<tr key={donation.id}>
							<td>{donation.date}</td>
							<td>{donation.bankName}</td>
							<td>
								<button
									className="download-button"
									onClick={() => handleDownload(donation.certificateUrl)}
								>
									Descargar
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default DonationHistory;
