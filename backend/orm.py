from sqlmodel import Session, SQLModel, select

from constants import User, Expense, engine


def create_user(user: User):
    with Session(engine) as session:
        session.add(user)
        session.commit()
        session.refresh(user)
    return user


def authenticate_user(username: str, password: str):
    with Session(engine) as session:
        statement = select(User).where(User.email == username)
        user = session.exec(statement).first()
        if not user:
            return False
        if user.password != password:
            return False
        return user.email


def get_user(email: str):
    with Session(engine) as session:
        statement = select(User).where(User.email == email)
        user = session.exec(statement).first()
    return user


def create_expense(expense: Expense):
    with Session(engine) as session:
        session.add(expense)
        session.commit()
        session.refresh(expense)
    return expense


def get_expenses(user_id: str):
    with Session(engine) as session:
        statement = select(Expense).where(Expense.user_id == user_id)
        expenses = session.exec(statement).all()
    return expenses


def get_expense(expense_id: str):
    with Session(engine) as session:
        statement = select(Expense).where(Expense.id == expense_id)
        expense = session.exec(statement).first()
    return expense


def remove_expense(expense_id: str):
    with Session(engine) as session:
        statement = select(Expense).where(Expense.id == expense_id)
        expense = session.exec(statement).first()
        session.delete(expense)
        session.commit()
    return expense
