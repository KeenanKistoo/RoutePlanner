import React, { useState, useEffect, useContext } from "react";
import { TicketPurchaseContext } from "../../Context/TicketPurchaseContext";
import { Link } from "react-router-dom";
import './Checkout.css'


function Checkout() {
    const [isLoading, setIsLoading] = useState(true);
    const {completeCheckout ,ticketPurchase} = useContext(TicketPurchaseContext);

    useEffect(() => {
        // Simulate a 2-second loading period
        const timer = setTimeout(() => {
            setIsLoading(false);
            ClearCart()
        }, 2000);

        // Clear the timeout if the component unmounts before the timeout completes
        return () => clearTimeout(timer);
    }, []); // Empty dependency array to ensure effect runs only once

    /**As mentioned in TicketPurchaseContext.jsx, this function is used to clear cart */
    function ClearCart(){
        for(let ticket in ticketPurchase){
            ticketPurchase[ticket] = 0;
            console.log("checkout" + ticketPurchase)
        }
    }
    return (
        <>
            {isLoading ? (
                <h1 className="message">Loading...</h1>
            ) : (
                <section>
                    <h1 className="complete">Checkout Complete! Enjoy your trip!</h1>
                    <Link className="link" to={"/"}>Routes</Link>
                </section>
            )}
            {/**Simulated experience of a successful checkout. */}
        </>
    );
}

export default Checkout;
