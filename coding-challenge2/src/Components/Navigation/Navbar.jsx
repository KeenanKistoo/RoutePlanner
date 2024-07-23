import React, { useContext, useState, useEffect } from "react";
import './Navbar.css'
import { Link } from "react-router-dom";
import { ShoppingCart, Circle } from "@phosphor-icons/react";
import { TicketPurchaseContext } from "../../Context/TicketPurchaseContext";

function Navbar(){
    const {ticketPurchase} = useContext(TicketPurchaseContext);
    const [cartFull, setCartFull] = useState(false);
    
    /*I used a useEffect to detect a change in value in ticketPurchase
    if there is a value change, the cart will have a circle around it.

    ***I had some styling errors, and commented out that section as it 
    was not a requirement
    */
    useEffect(() => {
        // Check if any item in ticketPurchase has a quantity greater than 0
        for (let item in ticketPurchase) {
            if (ticketPurchase[item] > 0) {
                setCartFull(true);
                console.log(cartFull);
                return; // Exit loop early if any item is found with quantity greater than 0
            }
        }
        // If no item with quantity greater than 0 is found, set cartFull to false
        setCartFull(false);
    }, [ticketPurchase]); // Re-run effect whenever ticketPurchase changes

    return(
        <nav className="nav-bar">
            <section className="links">
                <Link to={"/"}>Routes</Link> {/**Link to the homepage */}
                <Link to={"/cart"} ><ShoppingCart size={32}/></Link> {/**Link to the cart */}
                {/* <div className={cartFull ? "cart" : "not-full"}><Circle size={62} /></div>  
                I was trying to show when there were items in the cart. 
                Unfortunately, I was unable to implement it before the deadline.*/}
            </section>
        </nav>
    );
}

export default Navbar;
