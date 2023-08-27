import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

const ThemealPage = () => {
    const { id } = useParams();
    const [ingredients, setIngredients] = useState([]);
    useEffect(()=>{
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(response => {
                const mealData = response.data.meals[0] || {};
                setIngredients([mealData]);
            })
            .catch(error => {
                console.error("Error fetching random meal:", error);
            });
    }, []);

        return (
            <div>
                {ingredients.map(ingredient =>{
                    return (
                        <div className='meal-page'>
                            <Header />
                            <div className='meal-detail'>
                                <section className='meal-detail-info-block'>
                                    <div className='meal-detail-info-text'>
                                        <p className='meal-title'>{ingredient.strMeal}</p>
                                        <p className='meal-detail-base-info'>{ingredient.strCategory} | {ingredient.strArea}</p>
                                        <div className='ingredients'>
                                            {Object.keys(ingredient).map(key => {
                                                if (key.includes('strIngredient') && ingredient[key]) {
                                                    const measureKey = `strMeasure${key.slice(-1)}`;
                                                    return (
                                                        <p key={key}>
                                                            - {ingredient[key]} <b>{ingredient[measureKey]}</b>
                                                        </p>
                                                    );
                                                }
                                                return null;
                                            })}
                                        </div>
                                    </div>
                                    <div className='meal-detail-info-img'>
                                        <img src={ingredient.strMealThumb} alt={ingredient.strMeal}/>
                                    </div>
                                </section>
                                <section className='meal-detail-instruction'>
                                    <h2 className='meal-text'>Instruction</h2>
                                    <p>{ingredient.strInstructions}</p>
                                    <a className="meal-detail-youtube" href={ingredient.strYoutube} target="_blank">Watch on YouTube</a>
                                </section>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
}

export default ThemealPage;