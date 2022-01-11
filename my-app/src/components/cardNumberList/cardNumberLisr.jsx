import { Card,Checkbox } from '@mui/material';
import Button from '@mui/material/Button';

export const CardNumbers = ({todos, onDelete}) => {
    const isChekedComplited = todos.complited ? 'cheked' : null
    
    return(
    <Card sx={{margin:2, padding:2}}>
        <div style={{display: 'flex', justifyContent:'space-between', margin:'5'}}>
        <p>{todos.phoneNum}</p>
        <Checkbox checked={isChekedComplited}/>
        <br/>
        <Button variant="outlined" color="success">Edit</Button>
        <Button variant="outlined" color="error" onClick={() => onDelete(todos.id)}>Delete</Button>
        </div>
    </Card>
    )
}
