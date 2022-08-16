import { TextField, Button } from "@mui/material";

const TodoForm = ({text, addTask, setText}) => {
   return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
            <TextField
               type='text'
               value={text}
               onChange={(e) => setText( e.target.value)}
            />
            <Button sx={{mt: '10px'}}variant="contained" onClick={addTask}>
               добавить задачу
            </Button>
      </div>
   );
};

export default TodoForm;