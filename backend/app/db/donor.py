from sqlalchemy import Column, Integer, String
from data import Base


class Donor(Base):
    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)

