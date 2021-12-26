import React from 'react';
import { Container, Row, Accordion} from 'react-bootstrap';
import { Post } from '../components/Post'


export const Posts = () => {
    const content1 = "ppprueba"
    
    return (
        <div id="posts">
            <Container>
                <Row style={{textAlign: 'center'}}>
                    <h1>Posts</h1>
                </Row>
                <Row>
                    <Post title="Prueba" content={content1} id="0"/>
                </Row>
                <Row>
                    <Post title="Prueba" content="prueba2" id="1"/>
                </Row>        
            </Container>
        </div>
    )
}
