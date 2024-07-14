import React, { useEffect, useState } from "react";
import Style from "./Recipes.module.css";
import axios from "axios";

export default function Recipes() {
  const [meals, setMeals] = useState([]);

  async function getMeals() {
    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast`
    );
    setMeals(data.meals.slice(0, 3));
  }
  
  useEffect(() => {
    getMeals();
  }, []);

  return (
    <>
      <h2 className="text-center mainColor">Recipes</h2>
      <div
        className={`${Style.containerRecipes} row  w-75 mx-auto d-flex justify-content-center align-items-center gy-4 my-5`}
      >
        {meals.map((meal) => (
          <div key={meal.idMeal} className="col-lg-4 col-md-6 col-12">
            <div className={`${Style.cardBordr} card rounded-5`}>
              <img
                src={meal.strMealThumb}
                className="img-fluid rounded-5"
                alt={meal.strMeal}
              />
              <div className="card-body">
                <h5 className="card-title mainColor">{meal.strMeal}</h5>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled
                </p>
              </div>
            </div>
          </div>
        ))}

        <div className="btn-Recipes d-flex justify-content-center w-100">
          <button className="btn btn-warning rounded-5 text-white">
            Contact us
          </button>
        </div>
      </div>
    </>
  );
}
