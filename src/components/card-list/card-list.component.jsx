import React from 'react';
import {Card} from '../card/card.component';
import "./card-list.styles.css";

export const CardList = props => (
    <div className='card-list'>
        {props.robos.map(robo => (
            <Card key = {robo.id} robo = {robo}/>
        ))}
    </div>
);
