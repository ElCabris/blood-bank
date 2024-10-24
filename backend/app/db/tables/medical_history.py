from sqlalchemy import Column, Integer, String
from app.db.data import Base

class MedicalHistory(Base):

    __tablename__ = "MedicalHistory"

    id = Column(Integer, primary_key=True)
    path = Column(String, nullable=False)
