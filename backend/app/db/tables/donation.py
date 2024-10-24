from sqlalchemy import Column, Integer, Date, ForeignKey
from app.db.data import Base


class Donation(Base):
    __tablename__: str = "Donation"

    id = Column(Integer, primary_key=True)
    donante_id = Column(Integer, ForeignKey('Donor.id'), nullable=False)
    date_donation = Column(Date, nullable=False)
    certificate = Column(Integer, ForeignKey('Certificate.id'), nullable=False)
    donation_site = Column(Integer, ForeignKey('DonationSite.id'), nullable=False)
