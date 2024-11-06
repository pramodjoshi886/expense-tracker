from typing import Optional

from sqlmodel import create_engine, Field, SQLModel


db_url = "sqlite:///expense_tracker.db"
connect_args = {"check_same_thread": False}
engine = create_engine(db_url, connect_args=connect_args)


def create_db_and_tables():
    SQLModel.metadata.create_all(engine)


class User(SQLModel, table=True):
    email: str = Field(primary_key=True)
    password: str


class Expense(SQLModel, table=True):
    id: Optional[str] = Field(default=None, primary_key=True)
    cost: float
    name: str
    date: str
    user_id: str = Field(foreign_key="user.email")
