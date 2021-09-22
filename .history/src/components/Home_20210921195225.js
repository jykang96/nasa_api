import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Fragment>
            <h1 id="title">Spacestagram</h1>
            <Link to="/nasadata">
                See into the stars!
            </Link>
        </Fragment>
    )
}

export default Home
