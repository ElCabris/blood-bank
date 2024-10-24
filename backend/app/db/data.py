from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, sessionmaker

URL_DATA = "sqlite:///./data.db"
engine = create_engine(URL_DATA)

# declarative base
Base = declarative_base()

Session = sessionmaker(engine)


def db_session(func):
    def wrapper(*args, **kargs):
        session = Session()

        try:
            result = func(session, *args, **kargs)
            session.commit()
            return result
        except Exception as e:
            print(e)
        finally:
            session.close()
    return wrapper
