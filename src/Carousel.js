import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Carousel.css';
function carousel() {
    return (
       <Carousel infiniteLoop={true} showIndicators={false} showThumbs={false} showStatus={false} className="carousel">
            <div className="home">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/AmazonPayTravels/FlightsHero/revised/GCG_Flight_Herotator_desktop__Avataar._CB664435771_.jpg"
                    alt="display1" />
                      {/* /* <Btnarrow /> */ }
            </div>
             <div className="home">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/U599/AUG/1._CB644031110_.jpg"
                    alt="display2" />
                    {/* /* <Btnarrow />  */}
            </div>
            <div className="home">
                <img className="home__image" src="https://m.media-amazon.com/images/I/71x4THIwHML._SX3000_.jpg"
                    alt="display3" />
            </div>
            <div className="home">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Xiaomi/RedmiNote10S/GW/August/HDFC/D23007216_WLD_Xiaomi_RedmiNote10S_NewLaunch_tallhero_3000x1200._CB644052309_.jpg"
                    alt="display4" />
                    {/* <Btnarrow /> */}
            </div>
            <div className="home">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Samsung/SamsungM/Family/GW_30thJuly/Rv2/D20729242_IN_WLME_SamsungM_Family__DesktopTallHero_3000x1200_2._CB645291796_.jpg"
                    alt="display5" />
                    {/* <Btnarrow /> */}

            </div>
        </Carousel> 
    )
}

export default carousel
