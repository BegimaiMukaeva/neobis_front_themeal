import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../components/Header";


const HomePage = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
            .then(response => {
                setArticles(response.data.meals || []);
            })
            .catch(error => {
                console.error("Error fetching random meal:", error);
            });
    }, []);

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();

        if (searchTerm.trim() === "") {
            setErrorMessage("Enter the name of the dish you want to watch!");
            setSearchResults([]);
            return;
        }

        axios
            .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
            .then(response => {
                if (response.data.meals) {
                    setErrorMessage("");
                    setSearchResults(response.data.meals);

                } else {
                    setErrorMessage("Unfined meal, enter something else!");
                    setSearchResults([]);
                }
            })
            .catch(error => {
                console.error('Error searching for meals:', error);
            });

    };
        return (
            <div>
                {articles.map(article => {
                    return (
                        <div key={article.idMeal}>
                            <Header/>
                            <div className='home'>
                                <section className='random-meal'>
                                    <div className='random-meal-text'>
                                        <h2 className='meal-text'>Meal of the Day</h2>
                                        <p className='meal-title'>
                                            <Link to={`/meal/${article.idMeal}`}>{article.strMeal}</Link>
                                        </p>
                                        <p className='meal-info'>{article.strCategory} | {article.strArea}</p>
                                    </div>
                                    <div className='random-meal-img'>
                                        <img src={article.strMealThumb} alt={article.strMeal}/>
                                    </div>
                                </section>
                                <h2 className='meal-text'>Find your Meal</h2>
                                <form className='search-form' onSubmit={handleSearch}>
                                    <input
                                        type="text"
                                        placeholder="Find your meal"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                    <button type="submit">Search</button>
                                </form>
                                {errorMessage && <p className="error-message">{errorMessage}</p>}
                                <div>
                                    {searchResults.map(meal => (
                                        <div key={meal.idMeal}>
                                            <Link to={`/meal/${meal.idMeal}`}>
                                                <div className='meal-block'>
                                                    <img src={meal.strMealThumb} alt={meal.strMeal}/>
                                                    <div>
                                                        <h3 className='meal-block-name'>{meal.strMeal}</h3>
                                                        <p className='meal-block-info'>{meal.strCategory} | {meal.strArea}</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        )
    }

export default HomePage;

