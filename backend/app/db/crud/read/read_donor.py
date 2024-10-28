from typing import Optional

from sqlalchemy.orm import Session

from app.db.data import engine
from app.db.tables.donor import Donor


def get_donor(donor_id: int) -> Optional[Donor]:

    with Session(engine) as session:

        query = session.query(Donor).filter(Donor.id == donor_id).first()

        if query is not None:
            return query
        else:
            return None
