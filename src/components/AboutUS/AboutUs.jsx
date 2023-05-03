import React from 'react'
import About from '../../assets/image/about.jpg'
export default function AboutUs() {
    return (
        <div>
            <div class="container my-5">
                <div class="row ">
                    <div class="col-md-5 text-center">
                        <img src={About} class="img-fluid" alt="Your Image" />
                    </div>
                    <div class="col-md-7 ">
                        <h1 className="text-center py-3">About Us</h1>
                        <p>At our restaurant, we take pride in serving fresh and delicious food that is prepared with care by our skilled chefs. Our menu is designed to cater to a wide range of tastes and dietary needs, so you can always find something that you'll love. One of the many benefits of dining at our restaurant is the quality of our ingredients. We use only the freshest and highest quality ingredients to ensure that each dish is packed with flavor and nutrients. Our chefs are experts at using herbs, spices, and seasonings to enhance the natural flavors of our ingredients. In addition to the quality of our food, our restaurant is also committed to providing a welcoming and comfortable atmosphere. We believe that dining out should be an enjoyable experience, and we strive to create a warm and inviting atmosphere where you can relax and enjoy your meal. Another benefit of eating at our restaurant is the skill and experience of our chefs. Our chefs have years of experience in the culinary arts and are trained in a variety of cuisines. They have a deep understanding of flavor profiles and know how to balance different ingredients to create dishes that are both delicious and nutritious.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
