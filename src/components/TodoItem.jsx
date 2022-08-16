import React from 'react'
import { useDispatch} from 'react-redux';
import { hendelCompleted, removeTodo } from '../store/todoSlice';

import {Grid, Card, CardActions, CardContent, IconButton, Checkbox} from '@mui/material';

import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

const TodoItem = ({text,completed, id}) => {

    const dispatch = useDispatch()

    return (
        <Grid item  >
            <Card 
                sx={{
                    backgroundColor: '#cad3db',
                    width: 250,
                    // height: 200,
                    padding: '10px',
                }}>
                <CardContent>
                    <div className='itemText'>{text}</div>
                </CardContent>
                <CardActions sx={{justifyContent: 'space-between', alignItems: 'end', height: 70}}>
                    <Checkbox
                        className='checkbox_style'
                        checked={completed}
                        onChange={() => dispatch(hendelCompleted({id}))}
                    />
                    <IconButton size='large'  onClick={() => dispatch(removeTodo({id}))}>
                        <DeleteRoundedIcon/>
                    </IconButton>
                </CardActions>
            </Card>
        </Grid>
  )
}

export default TodoItem;
