import React from 'react'
import MultiplePizza from '../assets/multiplePizzas.jpeg'
import '../Style/About.css'

function About() {
  return (
    <div className='about'>
      <div className='aboutTop' style={{ backgroundImage: `url(${MultiplePizza})` }}>   
      </div>
      <div className='aboutBottom'>
        <h1>About Us</h1> 
        <p>Welcome to Royal Pizza Corner – where culinary royalty meets the art of pizza perfection! Established with a passion for delivering unparalleled taste experiences, Royal Pizza Corner has become a beacon of flavour in the world of gourmet pizza.
At Royal Pizza Corner, we believe that every pizza should be a masterpiece, crafted with the finest ingredients and a dash of regal flair. Our chefs, true artisans in the kitchen, meticulously prepare each pizza to ensure a symphony of flavours that tantalize your taste buds.
What sets Royal Pizza Corner apart is our commitment to quality. We source the freshest and finest ingredients, from handpicked tomatoes for our signature sauce to premium cheeses that melt in your mouth. Our dough is made from a secret recipe, perfected over time to achieve the
 ideal balance of crispiness and chewiness.At Royal Pizza Corner, we take pride in exceeding expectations. Our commitment to excellence extends beyond the kitchen to our exceptional customer service. We aim to make every visit a memorable one, leaving you craving more of our delectable creations.
Indulge in the majesty of flavours at Royal Pizza Corner – where every pizza is a masterpiece, and every bite is fit for royalty.
</p> 
      </div>
     
    </div>
  )
}

export default About
