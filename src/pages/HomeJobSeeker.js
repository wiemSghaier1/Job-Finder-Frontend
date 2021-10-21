import React, { Component } from 'react'
import HeaderJobSeeker from '../components/HeaderJobSeeker'
import Home from './Home'
import HeaderJobSeeker from "../components/HeaderJobSeeker";

export class HomeJobSeeker extends Component {
    render() {
        return (
            <div>
                <HeaderJobSeeker />
                <Home />
            </div>
        )
    }
}

export default HomeJobSeeker
