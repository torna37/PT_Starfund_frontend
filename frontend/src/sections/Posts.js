import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { fetchPosts } from '../Api';
import { Post } from '../components/Post'
import { doDownvote, doUpvote } from '../Api';

export const Posts = () => {
    
    const [postList, setPostList] = useState([])
    
    const getPosts = async () => {
        setPostList(await fetchPosts())
    }

    useEffect(() => {
            getPosts()
        }, [])

    const handleUpvote = (id) => {
        doUpvote(id)
        getPosts()
    }
    const handleDownvote = (id) => {
        doDownvote(id)
        getPosts()
    }

    return (
        <div id="posts">
            <Container>
                <Row style={{textAlign: 'center'}}>
                    <h1>Posts</h1>
                </Row>
                {postList.map((element) => (
                    <Row key={element.id}>
                        <Post title={element.title} content={element.content} likesCounter={element.likes_counter} 
                        id={element.id} upvote={handleUpvote} downvote={handleDownvote} userId={element.user_id}/>    
                    </Row>
                ))}        
            </Container>
        </div>

    )
}
