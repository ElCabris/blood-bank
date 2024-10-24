from sqlalchemy import Column, Integer, String
from data import Base


class MedicalHistory(Base):
    __tablename__: str = "MedicalHistory"
    
    id = Column(Integer, primary_key=True)
    path = Column(String, nullable=False)