import React from 'react'
import { useLoaderData } from 'react-router'
import { FaHandPointRight } from "react-icons/fa";
import InfoCard from '../InfoCard/InfoCard';

export default function CheifViewDetails() {
    const chefrecpies = useLoaderData()
    const { name, likes, recipes, image, experience, short_bio, recipes_details } = chefrecpies;
    return (
        <div className="container my-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <img src={image} alt="" />
                    </div>
                    <div className="col-md-7">
                        <h3 className="mb-3">Name: {name}</h3>
                        <h6>Bio: {short_bio}</h6>
                        <p>recpies: {recipes}</p>
                        <p>Exprience: {experience}</p>
                        <p><FaHandPointRight/> {likes}</p>
                    </div>
                </div>
            </div>
           <div>
           <div className="row row-cols-1 row-cols-md-3 g-4">{recipes_details.map(data =><InfoCard key={data.recipe_id} data={data}></InfoCard>)}</div>
           </div>
        </div>
    )
}
