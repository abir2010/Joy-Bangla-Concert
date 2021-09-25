import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Bands.css';

const Bands = (props) => {
    const {name, Band_member, Vocal, genre, Show_cost, image} = props.band;
    // console.log(props.band);
    return (
        <div className="col-4 mt-4 single-card">
            <div className="card-group">
                <div className="card">
                    <img src={image} className="card-img-top img-fluid" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-white bg-dark p-2 rounded">{name}</h5>
                        <p className="card-text"><b>Genre</b> : {genre}</p>
                        <p className="card-text"><b>Vocalist</b> : {Vocal}</p>
                        <p className="card-text"><b>Band member</b> : {Band_member}</p>
                        <h6 className="text-muted"><b>Cost</b> : <span className="text-danger">{Show_cost}</span></h6>
                    </div>
                    <div className="card-footer">
                        <button onClick={()=>props.btnFunc(props.band)}className="btn btn-danger"><FontAwesomeIcon icon={faShoppingCart}/> Add to your list</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bands;