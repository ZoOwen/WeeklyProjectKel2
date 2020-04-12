import React from 'react';
import './Home.css'

const Recipes = ({title,calories,image,ingredients}) =>{
    return(
        <div className="container">
        <h1 >{title}</h1>
        <img  src={image} alt=""/>
        <ol>
        {ingredients.map( ingredient =>(
                <li >{ingredient.text}</li>
        ))}
        </ol>
        <p>Calories :{calories}</p>
   
        </div>
    );
};
export default Recipes;