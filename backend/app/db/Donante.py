from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String

url_data = "sqlite:///./data"
engine = create_engine(url_data)

# declarative base
Base = declarative_base()

class Donante(Base):
    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)

Base.metadata.create_all(engine)
