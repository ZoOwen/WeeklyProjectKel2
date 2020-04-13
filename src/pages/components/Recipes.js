import React from 'react';
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Recipes = ({title,calories,image,ingredients}) =>{
    return(
    <center>
    <div className="wrapper container" width="100%">
       <div className="row">
       <div className="col-md-12">
       <h1>{title}</h1>
       <img  src={image} alt=""/>
       <ul style={{listStyle: 'none'}}>
       {ingredients.map( ingredient =>(
               <li >{ingredient.text}</li>
       ))}
       </ul>
       <p>Calories :{calories}</p>
  </div>
       </div>
        </div></center>
    );
};
export default Recipes;