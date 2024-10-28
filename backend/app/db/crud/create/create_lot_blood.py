from typing import Optional
from datetime import date as Date

from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm import Session

from app.db.data import engine
from app.db.tables.lot_blood import LotBlood
from app.db.tables.bank import Bank
from app.db.tables.donor import Donor


def add_lot_blood(date: Date, liters: float, bank_name: str, donor: int) -> Optional[int]:

    with Session(engine) as session:
        query = session.query(Bank).add_column(Bank.id).filter(Bank.name == bank_name).first()

        if query:
            bank_id = int(query.id)
        else:
            raise ValueError("not found bank")


        query = session.query(Donor).add_column(Bank.id).filter(Donor.id == donor).first()

        if query:
            donor_id = int(query.id)
        else:
            raise ValueError("not found donor")

    with Session(engine) as session:
        try:
            lot_blood = LotBlood(date=date, liters=liters, bank_id=bank_id, donor_id=donor_id)
            session.add(lot_blood)
            session.commit()
            print(f"Lot blood {lot_blood} added sucessfully")
            session.refresh(lot_blood)
            return lot_blood

        except IntegrityError as e:
            session.rollback()
            print(e)
            return None
