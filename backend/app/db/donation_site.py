from data import Base
from sqlalchemy import Column, Integer, String, ForeignKey

class DonationSite(Base):

    __tablename__ = "DonationSite"
    
    id = Column(Integer, primary_key=True) 
    bank = Column(Integer, ForeignKey('Bank.id'))
    address = Column(String)
