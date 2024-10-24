from sqlalchemy import create_engine

url_data = "sqlite:///./data"
engine = create_engine(url_data)