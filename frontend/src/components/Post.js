import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

// import logo from '../assets/images/logo.svg';


export const Post = ({title, content}) => {
    return (
        <>
            <Card style={{ width: '18rem' }, { margin: '2rem'}}>
                <Card.Header>{title}</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>{content}</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </Card>
        </>
        
    )
}