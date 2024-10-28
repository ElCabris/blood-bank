from typing import Optional

from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm import Session

from app.db.data import engine
from app.db.tables.bank import Bank


def add_bank(
    name: str,
    nit: str,
    email: str,
    password: str,
    phone_number: Optional[str] = None,
    city: Optional[str] = None,
) -> Optional[int]:

    with Session(engine) as session:
        try:
            bank = Bank(
                name=name,
                nit=nit,
                email=email,
                password=password,
                phone_number=phone_number,
                city=city,
            )
            session.add(bank)
            session.commit()
            print(f"Bank {name} added sucessfully")
            session.refresh(bank)
            return bank
        except IntegrityError as e:
            session.rollback()
            print(e)
            return None
