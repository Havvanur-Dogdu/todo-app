import React, { useState, useContext, useEffect} from 'react';
import { Modal } from 'react-bootstrap'
import { TodoContext } from '../context/TodoContext';
import EditForm from './EditForm'

const Todo = ({theItem}) => {

    const id = theItem.id;
    const item = theItem;
    const text = item.text;

    const [status, setStatus] = useState(item.status);
    const [show, setShow] = useState(false);


    const { dispatch } = useContext(TodoContext);

    const updatedTask = {id, text, status}

    const handleShow = (e) => setShow(true);
    const handleClose = (e) => setShow(false);

    const handlerStatus = (e) => {
        status === 'active' ? setStatus('pasive') : setStatus('active');
        dispatch({ type: 'update_task', id, updatedTask });
    }

    const handlerDeleteTask = (e) => {
        dispatch({ type: 'remove_task', id });
    }

    useEffect(() => {
        handleClose();
    },[item])


        return(
        <>
            <td>{item.text}</td>
            <td>
                <button onClick={(e) => handlerStatus(e)} className={item.status === 'active' ? 'btn text-success btn-act' : 'btn text-danger btn-act'}><i className="material-icons" >{item.status === 'active' ? 'done_all' : 'remove_done'}</i></button>
            </td>
            <td>
            <button onClick={(e) =>handleShow(e)} className="btn text-warning btn-act"><i className="material-icons" >&#xE254;</i></button> |
            <button onClick={(e) =>handlerDeleteTask(e)} className="btn text-danger btn-act"><i className="material-icons">&#xE872;</i></button>
            </td>

            <Modal show={show} onHide={(e) =>handleClose(e)}>
                    <Modal.Header className="modal-header" closeButton>
                        <Modal.Title>
                            Update Task
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <EditForm theItem={item} />
                    </Modal.Body>
                </Modal>
        </>
        )
    }


export default Todo;


