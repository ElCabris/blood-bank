from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base

URL_DATA = "sqlite:///./data.db"
engine = create_engine(URL_DATA, echo=True)

# Declarative base
Base = declarative_base()
