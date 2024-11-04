from typing import Optional

from fastapi import APIRouter, HTTPException, Response, status

from app.db.crud.create.create_bank import add_bank
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
            nit=bank.nit,
            email=bank.email,
            password=bank.password,
            addres=bank.addres,
            phone_number=bank.phone_number,
            city=bank.city,
        )

        return new_donor
    return HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Bank not found")


@bank_router.post("/bank", status_code=status.HTTP_201_CREATED)
async def set_donor(
    name: str,
    nit: str,
    email: str,
    password: str,
    addres: str,
    phone_number: Optional[str] = None,
    city: Optional[str] = None,
):
    result = add_bank(name, nit, email, password, addres, phone_number, city)

    if result is None:
        return HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST, detail="Donor creation faild"
        )
    return Response(status_code=status.HTTP_201_CREATED)
