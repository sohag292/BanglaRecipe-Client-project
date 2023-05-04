import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import LazyLoad from 'react-lazy-load';

export default function CheifProfileCard({ profile }) {
    console.log(profile);
    return (
        <Col md={6}>
            <Card>
                    <LazyLoad className=' my-4 mx-auto'  height={300} width={300} threshold={0.95}>
                        <img className="img-fluid" src={profile.image} alt="Chef" />
                    </LazyLoad>

                <Card.Body>
                    <h3>Name: {profile.name}</h3>
                    <h5>Experience: {profile.experience}</h5>
                    <h6>Some Famous recipes:</h6>
                    <ol>
                        {profile.recipes.map((recipe, index) => <li key={index}>{recipe}</li>)}
                    </ol>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div className="fs-5">Likes:- {profile.likes}</div>
                        <div><button className="btn btn-primary">View Recipes</button></div>
                    </div>
                </Card.Body>
            </Card>
        </Col >


    )
}
