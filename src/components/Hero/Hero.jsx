import "./Hero.css"

const Hero = ({ foods }) => {
    return (
        <main>
            <div className="food-cards">
                {foods.map((meal) => (
            
                            <div key={meal.idMeal} className="food-card">                            
                                <div className="food-image">
                                    <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: '100px'}} />
                                </div>
                                <div className="food-info">
                                    <div className="info">
                                        <h3 className="meal-name">{meal.strMeal}</h3>
                                        <p className="meal-area">{meal.strArea}</p>
                                        <button className="meal-category">{meal.strCategory}</button>
                                    </div>
                                </div>

                               
                            </div>
                           
                            
                        ))

                }
            </div>

        </main>
    )
}

export default Hero