from data import Base
from sqlalchemy import Column, Integer, String, ForeignKey

class DonationSide(Base):

    __tablename__ = "DonationSide"
    
    id = Column(Integer, primary_key=True) 
    bank = Column(Integer, ForeignKey('Bank.id'))
    address = Column(String)
