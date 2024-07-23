import React from "react";
import './Routes.css';
import { Link } from 'react-router-dom';

function Routes(props){
    const { title, id, price } = props;

    return(
        <section>
            <article className="route">
                <Link to={`/information/${id}`} className="title">{title}</Link> {/* Update the link to include the dynamic id parameter */}
                <p className="identifier">{'id:' + id}</p>
                <p className="price">{'R' + price}</p>
            </article>
        </section>
    );
}

export default Routes;
