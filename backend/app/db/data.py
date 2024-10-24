from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base

url_data = "sqlite:///./data"
engine = create_engine(url_data)

# declarative base
Base = declarative_base()

if __name__ == '__main__':
    Base.metadata.create_all(engine)
