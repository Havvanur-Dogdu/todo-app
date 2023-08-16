import { Form,Button,Col } from 'react-bootstrap';
import { useContext, useState} from 'react';

import  { TodoContext } from '../context/TodoContext';

const EditForm = ({theItem}) => {

    const { dispatch } = useContext(TodoContext);

    const item = theItem;
    const id = item.id;

    const [text, setText] = useState(item.text);
    const [status, setStatus] = useState(item.status);

    const updatedTask = {id, text, status};

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'update_task', id, updatedTask });
    }

    return (

    <Form onSubmit={handleSubmit}>

    <Form.Group className="mb-3">
        <Form.Label><strong>Set Task</strong></Form.Label>
        <Form.Control type='text'
        placeholder='Task *'
        value={text}
        onChange={(e) => setText(e.target.value)}
        required/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
        <Form.Label><strong>Set Status</strong></Form.Label>
        <Form.Select
        defaultValue={item.status}
        onChange={(e) => setStatus(e.target.value)}>
            <option value ="active" >completed</option>
            <option value ="pasive" >not completed</option>
        </Form.Select>
    </Form.Group>
    
    <div className="d-grid gap-2" style={{marginTop: '20px'}}>
        <Button variant="success" type="submit">
            Update Task
        </Button>
    </div>
    </Form>
)
}

export default EditForm;
