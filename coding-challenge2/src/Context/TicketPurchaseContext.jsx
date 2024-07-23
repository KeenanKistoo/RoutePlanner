import React from "react";
import { createContext, useState } from "react";
import TravelData from '../json_data/TravelData.json'

export const TicketPurchaseContext = createContext();

/*The general structure of the code was built from the E-Commerce Exercise 
 done in class.*/

//Creating a default ticker object representing the ids from TravelData.json
function makeDefaultTicket(){
    let tickets = {};
    for (let i =1; i < TravelData.length + 1; i++){
        tickets[i] = 0 //Setting the intial value to 0.
    }
    return tickets; //Note: It returns as an object.
}

export function TicketPurchaseContextProvider(props){
    const [ticketPurchase, setTicketPurchase] = useState(makeDefaultTicket()); //Managing the state of the tickets object. 
    /* ***IMPORTANT: ticketPurchase controls all the data that is being displayed. 
    If changes are made or pages are added, IMPORT ticketPurchase into the useContext call.*/

    //console.log(ticketPurchase);

    //Add item to cart.
    /** For the dataset, the ids are string ("route-'id'")
     * idOutput is created to remove the "route-" and just
     * have the number
     */
    function addToCart(id){
        let idOutput = Number(id.replace("route-", ""));
        setTicketPurchase({...ticketPurchase, [idOutput]: ticketPurchase[idOutput] + 1}); //Spread operator used to update ticketPurchase object based off of the id.
    }

    function removeFromCart(id) {
        let idOutput = Number(id.replace("route-", ""));
        // Check if the current quantity is already zero
        if (ticketPurchase[idOutput] === 0) {
            // If it's zero, do not decrement further
            return;
        }
        // Otherwise, decrement the quantity
        setTicketPurchase({ ...ticketPurchase, [idOutput]: ticketPurchase[idOutput] - 1 });
    }
    function updateCart(id, amount){
        let idOutput = Number(id.replace("route-", ""));
        setTicketPurchase({...ticketPurchase, [idOutput]: amount})
    }
    function getTotalAmount(){
        let total = 0;
        //console.log("ticket-purchase:", ticketPurchase[1])
        for(let ticket in ticketPurchase){
            total = total + (ticketPurchase[ticket] * TravelData[Number(ticket)-1].price);
            //console.log("context:" + total);
        }
        return total;
    }
    /**This function was created to reset my ticketPurchase state
     * However, I was unable to get it to work correctly.
     * I instead created ClearCart() in Checkout.jsx to do this task.
     */
    function completeCheckout(){
        setTicketPurchase(makeDefaultTicket());
    }
    const contextValues = {
        addToCart,
        removeFromCart,
        updateCart,
        getTotalAmount,
        completeCheckout,
        ticketPurchase,
    };
    return(
    <>
    <TicketPurchaseContext.Provider value={contextValues}>
        {props.children}
    </TicketPurchaseContext.Provider>
    </>
 )   
}

/* Decision Making:
My core process was trying to find the easiest way to achieve a shopping experience without
constant referencing. 

For example, instead of referencing the ticket id from the URL in other components/pages, I used idOutput
to store and process the values here in the context. (Lines 31, 36, and 46).

Another challenge I found was that the id was not an int but rather a string and a simple Number() conversion
was not possible. parseInt was not possible until removing the rest of the string first. Eventually, I realised that
converting the output in one line was more efficient than trying to achieve this in multiple lines. 
*/