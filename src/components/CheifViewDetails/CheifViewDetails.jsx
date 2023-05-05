import React from 'react'
import { useLoaderData } from 'react-router'
import { HiThumbUp } from "react-icons/hi";
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";
import InfoCard from '../InfoCard/InfoCard';
import { Link } from 'react-router-dom';

export default function CheifViewDetails() {
    const cheifRecipies = useLoaderData()
    const { name, likes, recipes, image, experience, short_bio, recipes_details } = cheifRecipies;
    console.log(cheifRecipies);
    return (
        <div className="container my-4">
            <div className="container">
                <div className="row mb-4">
                    <div className="col-md-5">
                        <img src={image} alt="" />
                    </div>
                    <div className="col-md-7">
                        <h3 className="mb-3">Name: {name}</h3>
                        <p><span className="fw-bolder">Bio:</span> {short_bio}</p>
                        <p><span className="fw-bolder">Recipes:</span> {recipes.join(", ")}</p>
                        <p><span className="fw-bolder">Exprience:</span> {experience}</p>
                        <div className="d-flex">
                            <div>
                                <p><HiThumbUp className="fs-5" /> {likes}</p>
                            </div>
                            <div className="ms-5 ">
                                <Link className="text-primary fs-5"><FaFacebook /></Link>
                                <Link className="text-danger fs-5"><FaYoutube /></Link>
                                <Link className="text-muted fs-5"><FaTwitter /></Link>
                                <Link className="text-danger fs-5"><FaInstagram /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="row row-cols-1 row-cols-md-3 g-4">{recipes_details.map(data => <InfoCard key={data.recipe_id} data={data}></InfoCard>)}</div>
            </div>
        </div>
    )
}
