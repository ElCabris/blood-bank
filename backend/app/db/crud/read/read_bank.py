from typing import Optional

from sqlalchemy.orm import Session

from app.db.data import engine
from app.db.tables.bank import Bank


def get_bank(name: str) -> Optional[Bank]:

    with Session(engine) as session:

        query = session.query(Bank).filter(Bank.name == name).first()

        if query:
            return query
        else:
            return None
