from typing import Optional

from sqlalchemy.orm import Session

from app.db.tables.bank import Bank
from app.db.data import engine

def get_donor(id: int) -> Optional[Bank]:

    with Session(engine) as session:

        query = session.query(Bank).filter(Bank.id == id).first()

        if query:
            return query
        else:
            return None
