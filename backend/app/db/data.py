from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base

URL_DATA = "sqlite:///./data"
engine = create_engine(URL_DATA)

# declarative base
Base = declarative_base()

if __name__ == '__main__':
    Base.metadata.create_all(engine)
