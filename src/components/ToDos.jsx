import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import todoSlice from '../store/todoSlice';
import './../styles/App.css';
import TodoForm from './TodoForm.jsx';
import TodoList from './TodoList';
import {addTodo} from './../store/todoSlice'
import MyModal from '../UI/MyModal';

import { Fab, Container } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

function ToDos() {
  const [text, setText] = useState('');
  const [visible, setVisible] = useState(false)

  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({text}));
    setText('')
    setVisible(false)
  }

  return (
    <div className='App'>
    <Container>
      <Fab color='info' onClick={()=> setVisible(true)}>
        <AddIcon fontSize='large'/>
      </Fab>
      <MyModal visible={visible} setVisible={setVisible}>
        <TodoForm 
          text={text} 
          setText={setText} 
          addTask={addTask}
        />
      </MyModal>

      <TodoList text={text}/>
    </Container>

    </div>
  );
}

export default ToDos;
