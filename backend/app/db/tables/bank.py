from sqlalchemy import Column, Integer, String

from app.db.data import Base


class Bank(Base):

    __tablename__ = "banks"

    id = Column(Integer, primary_key=True)
    name = Column(String, unique=True, nullable=False)
    nit = Column(String, unique=True, nullable=False)
    email = Column(String, nullable=False)
    password = Column(String, nullable=False)
    addres = Column(String, nullable=False)

    phone_number = Column(String, nullable=True)
    city = Column(String, nullable=True)
