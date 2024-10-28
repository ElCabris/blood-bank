from sqlalchemy import Column, Date, ForeignKey, Integer

from app.db.data import Base


class Donation(Base):
    __tablename__: str = "donations"

    id = Column(Integer, primary_key=True)
    donante_id = Column(Integer, ForeignKey("donors.id"), nullable=False)
    date_donation = Column(Date, nullable=False)
    certificate = Column(Integer, ForeignKey("certificates.id"), nullable=False)
    donation_site = Column(Integer, ForeignKey("donation_sites.id"), nullable=False)
