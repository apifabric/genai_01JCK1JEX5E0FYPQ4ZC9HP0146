# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Column, Date, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  November 13, 2024 15:17:46
# Database: sqlite:////tmp/tmp.jyPnsSwT09-01JCK1JEX5E0FYPQ4ZC9HP0146/SkiShopManagement/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class Customer(SAFRSBaseX, Base):
    """
    description: Customer information including personal details and account info.
    """
    __tablename__ = 'customers'
    _s_collection_name = 'Customer'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    email = Column(String)
    phone = Column(String)
    balance = Column(Integer)
    credit_limit = Column(Integer)

    # parent relationships (access parent)

    # child relationships (access children)
    HotChocolateBarList : Mapped[List["HotChocolateBar"]] = relationship(back_populates="customer")
    RentalTransactionList : Mapped[List["RentalTransaction"]] = relationship(back_populates="customer")
    TrainingSessionList : Mapped[List["TrainingSession"]] = relationship(back_populates="customer")



class Instructor(SAFRSBaseX, Base):
    """
    description: Information about ski instructors available for lessons.
    """
    __tablename__ = 'instructors'
    _s_collection_name = 'Instructor'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    certifications = Column(String)
    years_experience = Column(Integer)

    # parent relationships (access parent)

    # child relationships (access children)
    TrainingSessionList : Mapped[List["TrainingSession"]] = relationship(back_populates="instructor")



class SkiEquipment(SAFRSBaseX, Base):
    """
    description: Details of ski equipment available for rent at the ski shop.
    """
    __tablename__ = 'ski_equipment'
    _s_collection_name = 'SkiEquipment'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    price_per_day = Column(Integer)
    stock_quantity = Column(Integer)

    # parent relationships (access parent)

    # child relationships (access children)
    RentalTransactionList : Mapped[List["RentalTransaction"]] = relationship(back_populates="equipment")



class HotChocolateBar(SAFRSBaseX, Base):
    """
    description: Sales transactions from the hot chocolate bar.
    """
    __tablename__ = 'hot_chocolate_bar'
    _s_collection_name = 'HotChocolateBar'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    customer_id = Column(ForeignKey('customers.id'))
    drink_type = Column(String, nullable=False)
    quantity = Column(Integer)
    total_price = Column(Integer)

    # parent relationships (access parent)
    customer : Mapped["Customer"] = relationship(back_populates=("HotChocolateBarList"))

    # child relationships (access children)



class RentalTransaction(SAFRSBaseX, Base):
    """
    description: Transactions for renting ski equipment.
    """
    __tablename__ = 'rental_transactions'
    _s_collection_name = 'RentalTransaction'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    customer_id = Column(ForeignKey('customers.id'))
    equipment_id = Column(ForeignKey('ski_equipment.id'))
    rental_date = Column(Date, nullable=False)
    return_date = Column(Date)
    amount_total = Column(Integer)

    # parent relationships (access parent)
    customer : Mapped["Customer"] = relationship(back_populates=("RentalTransactionList"))
    equipment : Mapped["SkiEquipment"] = relationship(back_populates=("RentalTransactionList"))

    # child relationships (access children)



class TrainingSession(SAFRSBaseX, Base):
    """
    description: Details of training sessions provided by ski instructors.
    """
    __tablename__ = 'training_sessions'
    _s_collection_name = 'TrainingSession'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    instructor_id = Column(ForeignKey('instructors.id'))
    customer_id = Column(ForeignKey('customers.id'))
    session_date = Column(Date, nullable=False)
    duration = Column(Integer)
    price = Column(Integer)

    # parent relationships (access parent)
    customer : Mapped["Customer"] = relationship(back_populates=("TrainingSessionList"))
    instructor : Mapped["Instructor"] = relationship(back_populates=("TrainingSessionList"))

    # child relationships (access children)
