import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these resources</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem src='images/img-9.jpg' text='Explore career salaries' label='Careers' path='/services' />
            <CardItem src='images/img-2.jpg' text='Compare college costs' label='Colleges' path='/services' />
          </ul>
          <ul className='cards__items'>
            <CardItem src='images/img-3.jpg' text='Determine the financial value of college' label='Calculator' path='/services' />
            <CardItem src='images/img-4.jpg' text='Explore how to afford your lifestyle' label='Budget' path='/products' />
            <CardItem src='images/img-8.jpg' text='Form your retirement plan' label='Invest' path='/sign-up' />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
