import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { createPost, fetchPosts } from '../Api';
import { Post } from '../components/Post'
import { doDownvote, doUpvote } from '../Api';
import { NewPostModal } from '../components/NewPostModal';


export const Posts = () => {
    
    const [postList, setPostList] = useState([])
    
    const getPosts = async () => {
        setPostList(await fetchPosts())
    }

    useEffect(() => {
            getPosts()
        }, [])

    const handleUpvote = async (id) => {
        await doUpvote(id)
        getPosts()
    }
    const handleDownvote = async (id) => {
        await doDownvote(id)
        getPosts()
    }

    const handleNewPost = async (title, content, username) => {
        await createPost(title, content, username)
        await getPosts()
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
        <div>
            <NewPostModal handleAdd={handleNewPost}/>
        </div>
        </div>


    )
}
