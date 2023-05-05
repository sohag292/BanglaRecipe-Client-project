import React from 'react'
import './CheifProfileCard.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';
import { FcDownRight } from "react-icons/fc";
import { HiThumbUp } from "react-icons/hi";

export default function CheifProfileCard({ profile}) {
    const{chef_id,image,name,experience,likes} = profile
    return (
        <Col md={4}>
            <Card>
                    <LazyLoad className=' my-4 mx-auto'  height={230} width={220} threshold={0.95}>
                        <img className="img-fluid" src={image} alt="Chef" />
                    </LazyLoad>
                <Card.Body>
                    <h3>Name: {name}</h3>
                    <h5>Experience: {experience}</h5>
                    <h6>Some Famous recipes : 3</h6>
                    <div className="down_icon mt-3">
                        {profile.recipes.map((recipe, index) => <p key={index}><FcDownRight className="me-1"/>{recipe}</p>)}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div className="fs-5"><HiThumbUp className=" me-2"/>{likes}</div>
                        <div>
                            <Link to={`/chiefdetails/${chef_id}`}><button className="btn btn-primary">View Recipes</button></Link>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Col>


    )
}
