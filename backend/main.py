from fastapi import FastAPI, Header
from fastapi.middleware.cors import CORSMiddleware


from orm import create_user, authenticate_user, get_user, create_expense, get_expenses
from constants import Expense, User, create_db_and_tables

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.add_event_handler("startup", create_db_and_tables)


@app.post("/api/user/signup")
def signup(user: dict):
    user_obj = User(**user)
    print(user_obj)
    return create_user(user_obj)


@app.post("/api/user/login")
def login(user: dict):
    response = authenticate_user(user["email"], user["password"])
    return response


@app.post("/api/expense/add")
def add_expense(expense: dict, userId: str = Header()):
    if get_user(userId) is None:
        return {"error": "User not found"}
    expense["user_id"] = userId
    expense_obj = Expense(**expense)

    return create_expense(expense_obj)


@app.get("/api/expense/get")
def get_expense(userId: str = Header()):
    if get_user(userId) is None:
        return {"error": "User not found"}
    return get_expenses(userId)
