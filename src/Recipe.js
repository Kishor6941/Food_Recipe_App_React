import React from "react";
import style from "./recipe.module.css";
const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <ol className={style.ingredient}>
        {ingredients.map((ingredient) => (
          <li key={ingredient.text}>{ingredient.text}</li>
        ))}
      </ol>
      <h1 className={style.title}>{title}</h1>
      <h1 className={style.calories}> calories{calories}</h1>
      <img className={style.image} src={image} alt="" />
    </div>
  );
};

export default Recipe;
