# using resolved_model gpt-4o-2024-08-06# created from response, to create create_db_models.sqlite, with test data
#    that is used to create project
# should run without error in manager 
#    if not, check for decimal, indent, or import issues

import decimal
import logging
import sqlalchemy
from sqlalchemy.sql import func 
from logic_bank.logic_bank import Rule
from sqlalchemy import create_engine, Column, Integer, String, Float, ForeignKey, Date, DateTime, Numeric, Boolean, Text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm import relationship
from datetime import date   
from datetime import datetime

logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

Base = declarative_base()  # from system/genai/create_db_models_inserts/create_db_models_prefix.py


class Customer(Base):
    """description: Customer information including personal details and account info."""
    __tablename__ = 'customers'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    email = Column(String)
    phone = Column(String)
    balance = Column(Integer)
    credit_limit = Column(Integer)


class SkiEquipment(Base):
    """description: Details of ski equipment available for rent at the ski shop."""
    __tablename__ = 'ski_equipment'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    price_per_day = Column(Integer)
    stock_quantity = Column(Integer)


class RentalTransaction(Base):
    """description: Transactions for renting ski equipment."""
    __tablename__ = 'rental_transactions'

    id = Column(Integer, primary_key=True, autoincrement=True)
    customer_id = Column(Integer, ForeignKey('customers.id'))
    equipment_id = Column(Integer, ForeignKey('ski_equipment.id'))
    rental_date = Column(Date, nullable=False)
    return_date = Column(Date)
    amount_total = Column(Integer)


class HotChocolateBar(Base):
    """description: Sales transactions from the hot chocolate bar."""
    __tablename__ = 'hot_chocolate_bar'

    id = Column(Integer, primary_key=True, autoincrement=True)
    customer_id = Column(Integer, ForeignKey('customers.id'))
    drink_type = Column(String, nullable=False)
    quantity = Column(Integer)
    total_price = Column(Integer)


class Instructor(Base):
    """description: Information about ski instructors available for lessons."""
    __tablename__ = 'instructors'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    certifications = Column(String)
    years_experience = Column(Integer)


class TrainingSession(Base):
    """description: Details of training sessions provided by ski instructors."""
    __tablename__ = 'training_sessions'

    id = Column(Integer, primary_key=True, autoincrement=True)
    instructor_id = Column(Integer, ForeignKey('instructors.id'))
    customer_id = Column(Integer, ForeignKey('customers.id'))
    session_date = Column(Date, nullable=False)
    duration = Column(Integer)  # in minutes
    price = Column(Integer)


# ALS/GenAI: Create an SQLite database
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite')
Base.metadata.create_all(engine)

Session = sessionmaker(bind=engine)
session = Session()

# ALS/GenAI: Prepare for sample data

from datetime import date

# Customers
customer1 = Customer(name="John Doe", email="john.doe@example.com", phone="123-456-7890", balance=500, credit_limit=1000)
customer2 = Customer(name="Jane Smith", email="jane.smith@example.com", phone="987-654-3210", balance=300, credit_limit=800)
customer3 = Customer(name="Alice Brown", email="alice.brown@example.com", phone="555-123-4567", balance=200, credit_limit=500)
customer4 = Customer(name="Bob Green", email="bob.green@example.com", phone="555-765-4321", balance=600, credit_limit=1500)

# Ski Equipment
ski1 = SkiEquipment(name="Skis - Beginner", price_per_day=20, stock_quantity=50)
ski2 = SkiEquipment(name="Skis - Intermediate", price_per_day=25, stock_quantity=30)
ski3 = SkiEquipment(name="Ski Boots", price_per_day=10, stock_quantity=100)
ski4 = SkiEquipment(name="Poles", price_per_day=5, stock_quantity=200)

# Rental Transactions
rental1 = RentalTransaction(customer_id=1, equipment_id=1, rental_date=date(2023, 1, 15), return_date=None, amount_total=200)
rental2 = RentalTransaction(customer_id=2, equipment_id=2, rental_date=date(2023, 2, 20), return_date=date(2023, 2, 25), amount_total=125)
rental3 = RentalTransaction(customer_id=3, equipment_id=3, rental_date=date(2023, 3, 10), return_date=None, amount_total=150)
rental4 = RentalTransaction(customer_id=4, equipment_id=4, rental_date=date(2023, 4, 5), return_date=date(2023, 4, 10), amount_total=25)

# Hot Chocolate Bar
chocolate1 = HotChocolateBar(customer_id=1, drink_type="Milk Chocolate", quantity=2, total_price=10)
chocolate2 = HotChocolateBar(customer_id=2, drink_type="Dark Chocolate", quantity=1, total_price=5)
chocolate3 = HotChocolateBar(customer_id=3, drink_type="White Chocolate", quantity=4, total_price=20)
chocolate4 = HotChocolateBar(customer_id=4, drink_type="Spicy Chocolate", quantity=3, total_price=15)

# Instructors
instructor1 = Instructor(name="Luke Wilson", certifications="Level 1", years_experience=5)
instructor2 = Instructor(name="Emma Watson", certifications="Level 2", years_experience=8)
instructor3 = Instructor(name="Mark Hamill", certifications="Level 3", years_experience=10)
instructor4 = Instructor(name="Natalie Portman", certifications="Level 1", years_experience=3)

# Training Sessions
session1 = TrainingSession(instructor_id=1, customer_id=1, session_date=date(2023, 1, 20), duration=60, price=50)
session2 = TrainingSession(instructor_id=2, customer_id=2, session_date=date(2023, 2, 25), duration=90, price=70)
session3 = TrainingSession(instructor_id=3, customer_id=3, session_date=date(2023, 3, 30), duration=120, price=90)
session4 = TrainingSession(instructor_id=4, customer_id=4, session_date=date(2023, 4, 10), duration=30, price=30)


session.add_all([customer1, customer2, customer3, customer4, ski1, ski2, ski3, ski4, rental1, rental2, rental3, rental4, chocolate1, chocolate2, chocolate3, chocolate4, instructor1, instructor2, instructor3, instructor4])
session.commit()
