import React from "react";
import './Info.css'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { TicketPurchaseContext } from "../../Context/TicketPurchaseContext";

function Info(props){

    const {id, title, desc, duration, stops, price} = props;
    const {addToCart, removeFromCart, updateCart, ticketPurchase} = useContext(TicketPurchaseContext);

    let idOutput = Number(id.replace("route-", ""));
    let itemCount = ticketPurchase[idOutput];
    
 /*This function was added as a debug to solve a non-number
 error I was recieving in the console. 

 URL: https://www.codecademy.com/forum_questions/50324d12ae0dc90002046192#:~:text=Nan%20means%20%E2%80%9CNot%20a%20number,function%2C%20but%20getting%20it's%20contents.

 The link above was where I found out what a NaN error was. 

 My error was in the RouteInfo.jsx. I was referencing the title in
 my TravelData.json instead of the ID.

 if (isNaN(idOutput)) {
     // Handle the case when idOutput is NaN
     console.error(`Invalid id: ${id}`);
     return null;
 }*/


    function Test(){
        console.log("testing");
    }
    
    // Ensure itemCount is a valid number or fallback to 0
    if (isNaN(itemCount)) {
        itemCount = 1;
    }

    if(itemCount < 0){
        itemCount =0
    }
    
    return(
        <>
        <article className="info-sect">
            <h2 className="route-head">{title}</h2>
            <p className="desc">{desc}</p>
            <p className="duration">{"Total Duration: " + duration}</p>
            <p className="stops">{"Total Number of Stops: " + stops}</p>
            <p className="price-info">{"Total Price: " + "R" + (price * itemCount)}</p>
        </article>
        <section className="input-sect">
            <button className="change-btn" onClick={() => removeFromCart(id)}>-</button>
            <input className="input" type="text" value={itemCount} onChange={(e) => updateCart(id, Number(e.target.value))}/>
            <button className="change-btn" onClick={() => addToCart(id)}>+</button>
        </section>
        <section className="purchase-sect">
            <Link to={'/'} className="back-btn">Continue Shopping</Link>
            <Link to={'/cart'} className="pur-btn">Go to cart</Link>
        </section>
        </>
    );
}

export default Info;
