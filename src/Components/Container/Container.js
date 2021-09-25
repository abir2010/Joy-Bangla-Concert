import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Bands from '../Bands/Bands';
import Carts from '../Carts/Carts';
import './Container.css';

const Container = () => {
    const [bands,setBands] = useState([]);
    const [cartBands,setCartBands] = useState([]);
    useEffect(() => {
        fetch('./bandData.JSON')
            .then(res => res.json())
            .then(data => setBands(data))
    }, []);
    function handleCart(band) {
        const newCartBands = [...cartBands,band];
        setCartBands(newCartBands);
    }
    return (
        <div className="row mx-3">
            <div className="bands-container col-9 row">
                {
                    bands.map(band => <Bands 
                        key={band.name}
                        band={band}
                        btnFunc={handleCart}
                    />)
                }
            </div>
            <div className="carts-container col-3">
                <Carts cartBands={cartBands}/>
            </div>
        </div>
    );
};

export default Container;