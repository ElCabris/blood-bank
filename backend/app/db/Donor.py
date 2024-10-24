from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String
from Data import engine


# declarative base
Base = declarative_base()

class Donor(Base):
    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)

if __name__ == '__main__':
    Base.metadata.create_all(engine)
