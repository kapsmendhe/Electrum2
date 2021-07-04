import React from 'react';
import Avatar from './Avatar';
import Detail from './Detail';


function Card(props) {
    return (

        <div className="card">
            <div className="top">
                <Avatar img={props.img} />
                <p>{props.tags}</p>
                <p>{props.tags_km}</p>
            </div>
            <div className="bottom">
                <p className="name">{props.college_name}</p>
                <p>Ranking: {props.ranking}</p>
                <p><span>{props.nearest_place}</span> | <span>{props.nearest_place_KM}</span></p>
                <Detail detailInfo={props.famous_nearest_places} />
                <p><span>{props.free_cancellation}</span> | <span>{props.free_wifi}</span></p>

                <Detail detailInfo={props.offertext} />
                <p>Original fee | ₹{props.original_fees}</p>
                <p>Discount | {props.discount}%</p>
                <p>Discounted fee | ₹{props.discounted_fees}</p>
                <p>Fees Cycle | {props.fees_cycle}</p>
            </div>

        </div>

    )
}

export default Card
