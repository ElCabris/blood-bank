from sqlalchemy import Column, Integer, String
from app.db.data import Base

class Bank(Base):

    __tablename__ = "Bank"

    id = Column(Integer, primary_key=True)
    name = Column(String, unique=True, nullable=False)
    nit = Column(String, unique=True, nullable=False)
    phone_number = Column(String)
    email = Column(String, nullable=False)
    city = Column(String)
    password = Column(String, nullable=False)
