import { useEffect, useState } from "react"
import { ListGroup } from "react-bootstrap"
import { fetchUser } from "../Api"



export const Comment = ({content, userId}) => {

    const [user, setUser] = useState([])
        
        const getUser = async () => {
            setUser(await fetchUser(userId))
        }
        
        useEffect(() => {
            getUser()
        }, [])

    return (   
        <ListGroup.Item><i>{user.username} -{'>'}</i>{content}</ListGroup.Item>
    )
} 