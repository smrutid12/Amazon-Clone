import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import LanguageIcon from "@material-ui/icons/Language";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import CopyrightIcon from "@material-ui/icons/Copyright";
function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer__backToTop">
          <a href="#top">
            <h5>Back to top</h5>
          </a>
        </div>
        <div className="footer__links">
          <div className="space__between"></div>
          <div className="Know_us">
            <h4>Get to Know Us</h4>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Press Releases</a>
            </li>
            <li>
              <a href="#">Amazon Cares</a>
            </li>
            <li>
              <a href="#">Gift a Smile</a>
            </li>
          </div>
          <div className="space__between"></div>
          <div className="Connect">
            <h4>Connect with us</h4>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
          </div>
          <div className="space__between"></div>
          <div className="Make_money">
            <h4>Make Money with Us</h4>
            <li>
              <a href="#">Sell on Amazon</a>
            </li>
            <li>
              <a href="#">Sell under Amazon Accelerator</a>
            </li>
            <li>
              <a href="#">Amazon Global Selling</a>
            </li>
            <li>
              <a href="#">Become an Affiliate</a>
            </li>
            <li>
              <a href="#">Fulfilment by Amazon</a>
            </li>
            <li>
              <a href="#">Advertise Your Products</a>
            </li>
            <li>
              <a href="#">Amazon Pay on Merchants</a>
            </li>
          </div>
          <div className="space__between"></div>
          <div className="Help_you">
            <li>
              <h4>Let Us Help You</h4>
            </li>
            <li>
              <a href="#">COVID-19 and Amazon</a>
            </li>
            <li>
              <a href="#">Your Account</a>
            </li>
            <li>
              <a href="#">Returns Centre</a>
            </li>
            <li>
              <a href="#">100% Purchase Protection</a>
            </li>
            <li>
              <a href="#">Amazon App Download</a>
            </li>
            <li>
              <a href="#">Amazon Assistant Download</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
          </div>
          <div className="space__between"></div>
        </div>
        <div className="language">
          <div className="footer__language">
            <a href="/">
              <img
                className="footer__logo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt=""
              />
            </a>
            <div className="footer__languageDropdown">
              <LanguageIcon />
              <h5>English</h5>
              <div className="dropicon">
                <ArrowDropUpIcon style={{ fontSize: 15 }} />
                <ArrowDropDownIcon style={{ fontSize: 15 }} />
              </div>
            </div>
          </div>
          <div className="version">
              <div className="version__options">
            <a href="">Australia</a>
            <a href="">Brazil</a>
            <a href="">Canada</a>
            <a href="">China</a>
            <a href="">France</a>
            <a href="">Germany</a>
            <a href="">Italy</a>
            <a href="">Japan</a>
            <a href="">Mexico</a>
            <a href="">Netherlands</a>
            <a href="">Poland</a>
            <a href="">Singapore</a>
            <a href="">Spain</a>
            <a href="">Turkey</a>
            <a href="">United Arab Emirates</a>
            <a href="">United Kingdom</a>
            <a href="">United States</a>
          </div>
          </div>
        </div>

        <div className="footer__copyright">
          <div className="service">
            <div className="amazon__service">
              <h5>AbeBooks</h5>
              <h6>Books,art & collectibles</h6>
            </div>
            <div className="space__between"></div>
            <div className="amazon__service">
              <h5>Amazon Web Services</h5>
              <h6>Scalable Cloud Computing Services</h6>
            </div>
            <div className="space__between"></div>
            <div className="amazon__service">
              <h5>Audible</h5>
              <h6>Download Audio Books</h6>
            </div>
            <div className="space__between"></div>
            <div className="amazon__service">
              <h5>DPReview</h5>
              <h6>Digital Photography</h6>
            </div>
            <div className="space__between"></div>
            <div className="amazon__service">
              <h5>IMDb</h5>
              <h6>Movies, TV & Celebrities</h6>
            </div>
          </div>
          <div className="space__between"></div>
          <div className="service">
            <div className="amazon__service">
              <h5>Shopbop</h5>
              <h6>Designer Fashion Brands</h6>
            </div>
            <div className="space__between"></div>
            <div className="amazon__service">
              <h5>Amazon Business</h5>
              <h6>Everything For Your Business</h6>
            </div>
            <div className="space__between"></div>
            <div className="amazon__service">
              <h5>Prime Now</h5>
              <h6>2-Hour Delivery on Everyday Items</h6>
            </div>
            <div className="space__between"></div>
            <div className="amazon__service">
              <h5>Amazion Prime Music</h5>
              <h6>
                75 million songs, ad-free Over 10 million podcast episodes
              </h6>
              <div className="space__between"></div>
            </div>
          </div>

          <div className="copyright">
            <a>Conditions of Use & Sale</a>
            <a>Privacy Notice</a>
            <a>Interest-Based Ads</a>
            <a>
              <CopyrightIcon style={{ fontSize: 10 }} />
              1996-2021,Amazon.com,Inc. or its affiliates
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
