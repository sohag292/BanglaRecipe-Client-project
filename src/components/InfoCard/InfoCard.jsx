import React, { useState } from "react";
import { Toast, Button, Spinner } from "react-bootstrap";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
export default function InfoCard({ data }) {
    console.log(data);
    const { cooking_method, recipe_name, ingredients, rating } = data;
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
                    <h4 className="card-title mb-4 ml-4">{recipe_name} <span class="badge bg-secondary ">New</span></h4>
                    <h5>Ingredients</h5>
                    <ul className="">
                        {ingredients.map((ingred, index) => (
                            <li key={index}>{ingred}</li>
                        ))}
                    </ul>
                    <h5>Cooking Method</h5>
                    <p className="card-text">{cooking_method}</p>

                </div>
                <div className="ps-4">
                    Rating :  
                <Rating placeholderRating={rating}
                    emptySymbol={ <FaRegStar></FaRegStar>}
                    placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                    fullSymbol={<FaStar></FaStar>}
/>
                       
                </div>
                <div className=" text-center mt-4">

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
