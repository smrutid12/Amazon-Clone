// create this by using rfce
import React from 'react'
import "./Home.css";
import Product from './Product';
import Carousel from './Carousel';
// import Footer from './Footer';

function home() {
    return (
        <div  className="home">
            {/* <a name="top"> */}
            <Carousel id="top"/>
            <div className="home__row">
                <Product
                    id="12321341"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                    price={11.96}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/51PAIR77wJL.jpg"
                />
                <Product
                    id="22321331"
                    title="Vudy Wooden Handcrafted Wooden Stools | Table | for Living Room | Office | Décor-Brown (Mohagany)"
                    price={6.31}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71wC6vUXC8L._SL1500_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id="333214441"
                    title="New Apple iPhone 12 Pro Max (128GB) - Gold"
                    price={1598.7}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71fJ-gmBZtL._SL1500_.jpg"
                />
                <Product
                    id="19321345"
                    title="Lukzer 1 PC Multipurpose Clothes Rack for Displaying Clothes"
                    price={19}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/41iCP5Wlj-S.jpg"
                />
                <Product
                    id="46738392"
                    title="Fossil Gen 5 Carlyle Stainless Steel Touchscreen Men's Smartwatch (Black)"
                    price={306.6}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71XWG48C-NL._UL1500_.jpg"
                />
            </div>


            <div className="home__row">
                <Product
                    id="63738264"
                    title="Samsung 34-inch (86.40cm) Curved Monitor- 21:9 Ultrawide QLED, Thunderbolt 3 Port- LC34J791WTWXXL"
                    price={933.32}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/91pi34PiUPL._SL1500_.jpg"
                />
                <Product
                    id="63738265"
                    title="Logitech K380 Wireless Multi-Device Bluetooth Keyboard for Windows, Apple iOS, Apple TV, Android or Chrome, for PC/Mac/Laptop/Smartphone/Tablet(Rose)"
                    price={40.53}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/61+WA7Sqj0L._SL1500_.jpg"
                />
            </div>


            <div className="home__row">
                <Product
                    id="64479211"
                    title="Amazon Brand - Solimo Medusa Engineered Wood Wardrobe walnut finish ,3 Doors"
                    price={20.50}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/813bIeFxnQL._SL1500_.jpg"
                />
                <Product
                    id="89927364"
                    title="Bose Noise Cancelling Wireless Bluetooth Headphones 700, with Alexa Voice Control, Black"
                    price={460.00}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/51ntWa1Q0sL._SL1200_.jpg"
                />
            </div>
            {/* </a> */}
            {/* <Footer /> */}
        </div>


    );

}

export default home
