from typing import Optional
from pydantic import BaseModel

class Bank(BaseModel):

    id: int
    name: str
    nit: str
    email: str
    password: str
    phone_number: Optional[str]
    city: Optional[str] 
