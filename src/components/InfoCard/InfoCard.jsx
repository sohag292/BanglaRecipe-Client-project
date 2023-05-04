import React from 'react'

export default function InfoCard({ data }) {
    console.log(data);
    const { cooking_method, recipe_name, ingredients } = data;
    return (
        <div className="col mb-4">
            <div className="card p-4 h-100">
                <div className="card-body">
                    <h2 className="card-title mb-4">{recipe_name}</h2>
                    <h4>Ingredients</h4>
                    <ul className="">
                        {ingredients.map((ingred, index) => (
                            <li key={index}>
                                {ingred}
                            </li>
                        ))}
                    </ul>
                    <h4>Cooking Method</h4>
                    <p className="card-text">{cooking_method}</p>
                </div>
                <div className="card-footer text-center">
                    <button className="btn btn-success">Favourite</button>
                </div>
            </div>
        </div>
    )
}
