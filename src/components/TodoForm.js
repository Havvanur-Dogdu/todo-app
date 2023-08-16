import React, { useState, useContext } from 'react';
import { Form, Col, Row, Button, Alert } from 'react-bootstrap'
import { TodoContext } from '../context/TodoContext';

const TodoForm = () => {

    const [showAlertSuccess, setShowAlertSuccess] = useState(false);
    const [showAlertFail, setShowAlertFail] = useState(false);

    const { myTasks, dispatch } = useContext(TodoContext);

    const [text, setText] = useState('');
    const id = myTasks.length +1;

    const handleSubmit = (e) => {
        e.preventDefault();
        }

    const handleAlertSuccess = () => {
        setShowAlertSuccess(true);
            setTimeout(() => {
        setShowAlertSuccess(false)
        }, 2000);
    }

    const handleAlertFail = () => {
        setShowAlertFail(true);
            setTimeout(() => {
        setShowAlertFail(false)
        }, 2000);
    }

    const handleClick = (e) => {
        if(text && text.length <= 80){
            dispatch({ type: 'add_task', task: {id, text, status: 'pasive'} });
            handleAlertSuccess();
            setText('')
        }
        if(text.length > 80) {
            handleAlertFail();
        }
    }

    const handleKeypress = (e) => {
        if(e.key === "Enter") {
            handleClick()
        }
    }

        return(
            <div>
                <Alert show={showAlertFail} style={{marginTop: '50px'}} variant='danger'>Task length cannot exceed 40 characters.</Alert>
                <Alert show={showAlertSuccess} style={{marginTop: '50px'}} variant='success'>Task successfully added.</Alert>
                <Form style={{marginTop: '100px'}} onSubmit={handleSubmit}>
                    <Row>
                        <Col sm='9'>
                    <Form.Group className="mb-3 mt-10">
                        <Form.Control
                        placeholder="Add a task"
                        value={text}
                        type="text"
                        onChange={e => setText(e.target.value)}
                        onKeyDown={handleKeypress}/>
                    </Form.Group>
                    </Col>
                    <Col>
                    <div className="d-grid gap-2">
                    <Button
                    className="btn btn-success"
                    variant="white"
                    type="button"
                    onClick={(e) => handleClick(e)}
                    >
                    ADD
                    </Button>
                    </div>
                    </Col>
                    </Row>
                </Form>
            </div>
        )

}
export default TodoForm;