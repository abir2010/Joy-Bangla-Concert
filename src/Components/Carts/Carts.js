import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGuitar } from '@fortawesome/free-solid-svg-icons';
import './Carts.css';

const Carts = (props) => {
    let sum = 0;
    for(let i=0; i<props.cartBands.length; i++){
        sum += props.cartBands[i].Show_cost;
    }
    return (
        <div className="cart mt-4">
            <div className="details-cart">
                <img src="" alt="" width="250px"/>
                <h5>Your <span className="text-danger">Suggession</span> list</h5>
                <p>Thanks for your suggession!</p>
                <div className="row">
                    <div className="col-2"><FontAwesomeIcon icon={faGuitar} /></div>
                    <div className="col-5">Total Bands</div>
                    <div className="col-5"> : {props.cartBands.length}</div>
                </div><br />
                <div className="row">
                    <div className="col-2"><FontAwesomeIcon icon={faGuitar} /></div>
                    <h6 className="col-5">Grand Total</h6>
                    <h6 className="col-5">: {sum} taka</h6>
                </div><br />
                <div className="row">
                    <h5 className="col-12">Your <span className="text-danger">Selection</span></h5>
                </div><br />
                {
                    props.cartBands.map( cartBand =>
                    <div className="row m-2" key={cartBand.Show_cost}>
                        <img className="col-4" src={cartBand.image} alt="" />
                        <h6 className="col-4">{cartBand.name}</h6>
                        <h6 className="col-4">{cartBand.genre}</h6>
                    </div> )
                }
                <button className="btn-1 btn-danger"><small>Click to send suggession</small></button> <br />
                <button className="btn-2 pb-4"><small>Cancel</small></button>
            </div>
        </div>
    );
};

export default Carts;