import React, { Component } from 'react';
import {createBrowserHistory} from 'history';
import {BrowserRouter as Router, Route} from 'react-router-dom';

export class Menu extends Component {
    render() {
        return (
            <nav id="menu" role="navigation" className="menu">
                <ul>
                    <li className=""><a>Services</a></li>
                    <li className="menu-hasdropdown"><a>Offers</a></li>
                    <li className="menu-hasdropdown"><a>Support</a></li>
                    <li className="menu-hasdropdown"><a>Blog</a></li>
                    <li className="menu-hasdropdown"><a>Reviews</a></li>
                </ul>
            </nav>
    
            )
    }
}