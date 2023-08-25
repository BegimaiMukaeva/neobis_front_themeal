import React from "react";
import useState from "react"


class HomePage extends React.Component {
    render() {
        return (
            <div className='home'>
                <section className='random-meal'>
                    <div className='random-meal-text'>
                        <h2 className='meal-text'>Meal of the Day</h2>
                        <p className='meal-title'>
                            <a href="">Chocolate Souffle</a>
                        </p>
                        <p className='meal-info'>Dessert | French</p>
                    </div>
                    <div className='random-meal-img'>
                        <img src="https://www.themealdb.com/images/media/meals/qywups1511796761.jpg" alt="Boulangère Potatoes"/>
                    </div>
                </section>
                <h2 className='meal-text'>Find your Meal</h2>
                <form className='search-form'>
                    <input type="text" placeholder="Find your meal"/>
                    <button type="submit">Search</button>
                </form>
                <div>
                    <a href="">
                        <div className='meal-block'>
                            <img src="https://www.themealdb.com/images/media/meals/58oia61564916529.jpg" alt=""/>
                            <div>
                                <h3 className='meal-block-name'>Corba</h3>
                                <p className='meal-block-info'>Side|Turkey</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}

export default HomePage;