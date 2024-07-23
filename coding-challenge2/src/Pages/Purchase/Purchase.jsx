import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { TicketPurchaseContext } from "../../Context/TicketPurchaseContext";
import td from '../../json_data/TravelData.json'
import './Purchase.css'

function Purchase(){
    const {addToCart, removeFromCart, updateCart, getTotalAmount,ticketPurchase} = useContext(TicketPurchaseContext);
    const [totalAmount, setTotalAmount] = useState(0);
    useEffect(() => {
        // Calculate the total amount when the component mounts or when ticketPurchase changes
        const total = getTotalAmount();
        setTotalAmount(total);
        
    }, [ticketPurchase, getTotalAmount]);

    console.log("Total Amount:", totalAmount);
    
    const ticketIDs = Object.keys(ticketPurchase);
    console.log("ticket purchase:", ticketIDs);

    
    return(
        <>
        <h1 className="page-head">Cart</h1>
        {Object.values(ticketPurchase).some(amount => amount > 0) ? ( // Check if any value is greater than 0
            <>
                {Object.keys(ticketPurchase)
                .filter((ticket) => ticketPurchase[ticket] !== 0) // Filter out keys with a value of 0
                .map((ticket) => (
                    <div className="ticket" key={ticket}>
                        <h2 className="ticket-head">{td[ticket-1].title}</h2>
                        <p className="route-id">{"route-id: " + td[ticket-1].id}</p>
                        <p className="price-cart">{"Total Price: " + 'R' + (td[ticket-1].price * ticketPurchase[ticket])}</p>
                        <section className="value-sect">
                            <button className="alter-btns" onClick={() => removeFromCart(ticket)}>-</button>
                            <input id="input" type="text" value={ticketPurchase[ticket]} onChange={(e) => updateCart(ticket, e.target.value)} />
                            <button id="plus" className="alter-btns" onClick={() => addToCart(ticket)}>+</button>
                        </section>
                    </div>
                ))}
                <p className="subtotal">Subtotal: {'R' + Object.keys(ticketPurchase)
                    .filter((ticket) => ticketPurchase[ticket] !== 0)
                    .map((ticket) => td[Number(ticket) - 1].price * ticketPurchase[ticket])
                    .reduce((total, price) => total + price, 0)}</p>
                    <Link className='checkout' to='/checkout'>Checkout</Link>
            </>
        ) : (
            <p className="no-items">No items in cart</p>
            /**If no items in cart, display this message */
        )}
    </>

    );
}

export default Purchase;

/**Reflection:
 * For this challenge, I think that I tried to create this overlap between the class
 * exercise memo and the challenge's requirements. Through most part, I was successful
 * however, I felt the need to constantly question why certain aspects were done, 
 * because I simply did not understand. 
 * 
 * Keeping this in mind, I spent a lot of the time breaking down and overanalysing my 
 * code to improve this already efficient system from the exercise. 
 * 
 * I decided to break down each aspect in a flowchart to show where the context overlaps.
 * This made the process significantly easier, as I was no longer trying to just replicate
 * what I had to match the new dataset.
 * 
 * Also, routing was unexpectedly frustrating considering the dataset was based of 'routes' XD.
 * 
 * Overall, I do think that I need to create basic react-apps to solidify my understanding on
 * how everything works and find the quickest way to acheive certain goals. I felt that I could
 * have used more components to clean up my code especially in Purchase.jsx. If I come back to this
 * code in a couple of months for example, the code will look very saturated with a lot of code 
 * which could have been broken down more. 
 */