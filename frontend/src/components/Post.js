import React, { useEffect, useState } from 'react';
import { Card, ListGroup, Col, Button } from 'react-bootstrap';
import { createComment, fetchComments, fetchUser } from '../Api';
import icon from '../assets/images/upvote.svg';
// import add from '../assets/images/addComment.svg'
import { NewCommentModal } from './NewCommentModal';
import { Comment } from './Comment'

export const Post = ({title, content, likesCounter, id, upvote, downvote, userId}) => {
    
    const [user, setUser] = useState([])
    
    const getUser = async () => {
        setUser(await fetchUser(userId))
    }
    
    useEffect(() => {
        getUser()
    }, [])
    
    const [commentList, setCommentList] = useState([])
    
    const [open, setOpen] = useState(false)
    
    
    const getComments = async () => {
        setCommentList(await fetchComments(id))
    }
    
    const handleComments = async () => {
        await getComments()
        setOpen(!open)
    }

    const handleNewComment = async ( content, username) => {
        await createComment(id, content, username)
        await getComments()
    }

    return (
        <>
            <Col>
                
                <Card className="post-card">
                    <Card.Header> <i>{user.username} -{'>'}</i> <b>{title} </b> </Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>{content}</ListGroup.Item>
                    </ListGroup>
                    <Card.Footer className='text-muted'>
                        <img src={icon} onClick= {() => upvote(id)} className='upvote'/>
                        {likesCounter}
                        <img src={icon} onClick= {() => downvote(id)} className='downvote'/>
                        <Button onClick = {() => handleComments()}>Show replies</Button>
                    </Card.Footer>
                </Card>

                <Card className={`comment-card ${open?"":"collapse"}`} >
                    <ListGroup variant="flush">
                        {commentList.map((element) => (
                            <Comment key={element.id} content={element.content} userId = {element.user_id}/>  
                            ))}    
                    </ListGroup>
                    
                            {/* <ListGroup.Item>{content}</ListGroup.Item> */}
                    <Card.Footer className='text-muted'>
                        <NewCommentModal handleAdd={handleNewComment}/>
                    </Card.Footer>
                
                </Card>
            
            </Col>
        </>
        
    )
}