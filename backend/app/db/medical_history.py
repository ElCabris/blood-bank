from sqlalchemy import Column, Integer, String
from data import Base

__tablename__: str = "MedicalHistory"

class MedicalHistory(Base):
    id = Column(Integer, primary_key=True)
    path = Column(String, nullable=False)