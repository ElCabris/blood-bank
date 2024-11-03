from fastapi import APIRouter, HTTPException, status

from app.db.crud.read.read_bank import get_bank
from app.schemas.bank import Bank

bank_router = APIRouter()


@bank_router.get("/bank", response_model=Bank)
async def get_bank_by_name(name: str):
    bank = get_bank(name)

    if bank is not None:
        new_donor = Bank(
            id=bank.id,
            name=bank.name,
            email=bank.email,
            password=bank.password,
            phone_number=bank.phone_number,
            city=bank.city,
        )

        return new_donor
    return HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Bank not found")
