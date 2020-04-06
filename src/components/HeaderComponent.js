import React from 'react';
import { Jumbotron } from 'react-bootstrap';

export default function HeaderLogo() {
    return (
        <div className="HeaderLogo">
            <Jumbotron className="jumbotronstyle">
                <img className="center-block" src="/src/visuals/LogoUniMorph.png" />
            </Jumbotron>
        </div>
    )
}