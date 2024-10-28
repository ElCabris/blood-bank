from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from app.db.data import Base


class DonationSite(Base):

    __tablename__ = "donation_sites"

    id = Column(Integer, primary_key=True)
    bank_id = Column(Integer, ForeignKey("banks.id"), nullable=True)
    address = Column(String, nullable=False)

    bakns = relationship("Bank", backref="banks")
