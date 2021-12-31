import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import add from '../assets/images/addPost.svg'


export const NewPostModal = ({handleAdd}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [formUsername, setFormUsername] = useState("")
    
    const handleChangeUsername = (e) => {
        setFormUsername(e.target.value)
    }

    const [formTitle, setFormTitle] = useState("")

    const handleChangeTitle = (e) => {
        setFormTitle(e.target.value)
    }

    const [formContent, setFormContent] = useState("")

    const handleChangeContent = (e) => {
        setFormContent(e.target.value)
    }


    return (
        <>
        <img src={add} className = "new-post-button grow" onClick={handleShow}/>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* <Form onSubmit={handleSubmit}> */}
                <Form.Group>
                    <Form.Label> Username: </Form.Label>
                    <Form.Control type="username" onChange = {(e) => handleChangeUsername(e)} placeholder="Enter username"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label> Title: </Form.Label>
                    <Form.Control type="title" onChange = {(e) => handleChangeTitle(e)} placeholder="Enter title"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Content</Form.Label>
                    <Form.Control as="textarea" onChange = {(e) => handleChangeContent(e)} rows={3} />
                </Form.Group>        
                {/* </Form> */}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => { handleAdd(formTitle, formContent, formUsername); handleClose() }}>
                    Add
                </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}