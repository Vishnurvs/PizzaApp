import React from 'react'
import { Link } from 'react-router-dom'
import '../Style/Home.css'
import BannerImg from '../assets/pizza.jpeg'

function Home() {
    return (
        <div className='home' style={{ backgroundImage: `url(${BannerImg})` }}>
            <div className="headerContainer">
                <h1>Royal Pizza Corner</h1>
                <p>PIZZA TO FIT ANY TASTE</p>
                <Link to="/menu"><button>Order Now</button></Link>
            </div>
        </div>

    )
}

export default Home
