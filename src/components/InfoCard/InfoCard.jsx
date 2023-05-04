import React, { useState } from "react";
import { Toast, Button, Spinner } from "react-bootstrap";

export default function InfoCard({ data }) {
    console.log(data);
    const { cooking_method, recipe_name, ingredients } = data;
    const [isFavorited, setIsFavorited] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleFavoriteClick = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsFavorited(true);
            setShowToast(true);
            setIsLoading(false);
        }, 1000);
    };
    return (
        <div className="col mb-4">
            <div className="card p-4 h-100">
                <div className="card-body">
                    <h2 className="card-title mb-4">{recipe_name}</h2>
                    <h4>Ingredients</h4>
                    <ul className="">
                        {ingredients.map((ingred, index) => (
                            <li key={index}>{ingred}</li>
                        ))}
                    </ul>
                    <h4>Cooking Method</h4>
                    <p className="card-text">{cooking_method}</p>
                </div>
                <div className="card-footer text-center">
                    {isLoading ? (
                        <Spinner animation="border" variant="primary" />
                    ) : (
                        <Button
                            className="btn-success"
                            onClick={handleFavoriteClick}
                            disabled={isFavorited}
                        >
                            {isFavorited ? "Favorited!" : "Favorite"}
                        </Button>
                    )}
                </div>
            </div>
            <Toast
                onClose={() => setShowToast(false)}
                show={showToast}
                delay={3000}
                autohide
            >
                <Toast.Header>
                    <strong className="me-auto">Favorite Recipe</strong>
                </Toast.Header>
                <Toast.Body>Added {recipe_name} to your favorites!</Toast.Body>
            </Toast>
        </div>
    )
}
