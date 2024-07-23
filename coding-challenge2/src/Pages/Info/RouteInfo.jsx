import React from "react";
import Info from './Info'
import { useParams } from "react-router-dom";
import TravelData from '../../json_data/TravelData.json'

function RouteInfo(){
    let {id} = useParams(); //Accessing the id of the relevant TravelData from the URL.
    let idOutput = id.replace("route-", "") //Removing string element. 
    let finalIndex = idOutput - 1; //Setting the element to match with the TravelData indexes.
    const td = TravelData;
    return(
        <>
            <Info
            id={td[finalIndex].id}
            title={td[finalIndex].title}
            desc={td[finalIndex].description}
            duration={td[finalIndex].duration}
            stops={td[finalIndex].stops}
            price={td[finalIndex].price}
            />
        </>
    );
}

export default RouteInfo;