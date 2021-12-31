import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import add from '../assets/images/addComment.svg'


export const NewCommentModal = ({handleAdd}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [formUsername, setFormUsername] = useState("")
    
    const handleChangeUsername = (e) => {
        setFormUsername(e.target.value)
    }

    const [formContent, setFormContent] = useState("")

    const handleChangeContent = (e) => {
        setFormContent(e.target.value)
    }


    // "content", "username"

    return (
        <>
        <img src={add} onClick={handleShow}/>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add comment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* <Form onSubmit={handleSubmit}> */}
                <Form.Group>
                    <Form.Label> Username: </Form.Label>
                    <Form.Control type="username" onChange = {(e) => handleChangeUsername(e)} placeholder="Enter username"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control as="textarea" onChange = {(e) => handleChangeContent(e)} rows={3} />
                </Form.Group>        
                {/* </Form> */}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => { handleAdd(formContent, formUsername); handleClose() }}>
                    Add
                </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}