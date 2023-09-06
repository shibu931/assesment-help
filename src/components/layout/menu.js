import React, { Component } from 'react';
import {createBrowserHistory} from 'history';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export class Menu extends Component {
    render() {
        return (
            <nav id="menu" role="navigation" className="menu">
                <ul>
                    <li className=""><a href='#home'>Home</a></li>
                    <li className="menu-hasdropdown"><a href='#services'>Services</a></li>
                    <li className="menu-hasdropdown"><a href='#writinghelp'>Writing Help</a></li>
                    <li className="menu-hasdropdown"><a href='#faqs'>FAQs</a></li>
                    <li className="menu-hasdropdown"><a href='#reviews'>Reviews</a></li>
                    <li className="menu-hasdropdown"><a href='#contact'>Contact Us</a></li>
                </ul>
            </nav>
    
            )
    }
}