import React from "react";
import style from "./recipe.module.css";
const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.receipe}>
      <h1 className={style.receipe}>{title}</h1>

      <img className="img-style" src={image} alt="bg" />

      <ul>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
      <p>Total calories {calories}</p>
    </div>
  );
};

export default Recipe;
