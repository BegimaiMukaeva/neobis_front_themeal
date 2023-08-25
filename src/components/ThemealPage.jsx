import React from "react";
import Header from "./Header";


class ThemealPage extends React.Component {
    render() {
        return (
            <div className='meal-page'>
                <Header />
                <div className='meal-detail'>
                    <section className='meal-detail-info-block'>
                        <div className='meal-detail-info-text'>
                            <p className='meal-title'>Stuffed Bell Peppers with Quinoa and Black Beans</p>
                            <p className='meal-detail-base-info'>Vegetarian | Mexican</p>
                            <div className='ingredients'>
                                <p> Green Pepper <b>4 whole</b></p>
                                <p> Green Pepper <b>4 whole</b></p>
                                <p> Green Pepper <b>4 whole</b></p>
                                <p> Green Pepper <b>4 whole</b></p>
                                <p> Green Pepper <b>4 whole</b></p> 
                                <p> Green Pepper <b>4 whole</b></p>
                                <p> Green Pepper <b>4 whole</b></p>
                                <p> Green Pepper <b>4 whole</b></p>
                                <p> Green Pepper <b>4 whole</b></p>
                            </div>
                        </div>
                        <div className='meal-detail-info-img'>
                            <img src="	https://www.themealdb.com/images/media/meals/b66myb1683207208.jpg" alt=""/>
                        </div>
                    </section>
                    <section className='meal-detail-instruction'>
                        <h2 className='meal-text'>Instruction</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum eveniet facilis harum, ipsam labore quasi? Aliquam aliquid aperiam beatae, dignissimos iusto magni nihil nostrum, odit perspiciatis quidem quos recusandae vero? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci at earum eveniet laudantium tempora velit veritatis. Architecto deserunt ea incidunt optio praesentium quibusdam quod ratione sint voluptas. Beatae, eos, minima!</p>
                        <a className="meal-detail-youtube" href="">Watch on YouTube</a>
                    </section>
                </div>
            </div>
        )
    }
}

export default ThemealPage;