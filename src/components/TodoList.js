import React, { useContext, useEffect } from 'react';
import { Table, Image } from 'react-bootstrap';
import { TodoContext } from '../context/TodoContext';
import Todo from './Todo'
import EmptyImage from '../images/empty-list.jpg'

const TodoList = () => {

    const { myTasks } = useContext(TodoContext);

        const myItems = myTasks.map((item, i) =>
        <tr key={i+1}>
            <td>{i+1}</td>
            <Todo theItem = {item} />
        </tr>
        )

        useEffect(() => {
            
        }, [myTasks])

        return(
            (myTasks.length > 0
            ? (<div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Task Number</th>
                        <th>Tasks</th>
                        <th>Status</th>
                        <th>Edit | Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myItems}
                    </tbody>
                </Table>
                <h5 style={{marginBottom: '50px'}}>{myTasks.filter(task => task.status === 'active').length} out of {myTasks.length} tasks completed.
                {myTasks.filter(task => task.status === 'active').length === myTasks.length ? <>&#127881;</>: ''}</h5>
                
            </div>)
            : <div style={{ textAlign: "center", fontFamily: 'monospace', marginTop: '70px'  }}>
                <h5>When you add tasks, it will appear in this area.</h5>
                <Image style={{height:'auto',width:'34%'}} src={ EmptyImage }></Image>
            </div>
            )
            
        )
    }


export default TodoList;


