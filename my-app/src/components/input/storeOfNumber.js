import Container from '@mui/material/Container';
import {TextField} from '@mui/material';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { CardNumbers } from '../cardNumberList/cardNumberLisr';

export const ToDoList =() => {
     
  const [toDoList,setToDoList] = useState([])
     const [value,setValue] = useState('')
     const [serch,setSearch] = useState('')
     const [save,setSave] = useState('')
 
     const onSave = (event) =>{
        event.preventDefault();
        setSearch(toDoList)
        setValue('')
            if (toDoList.some((e) => e.phoneNum == value)){
              return console.log('errrrr');
          } else {
      
        const data ={
          phoneNum:value,
          id:value,
          complited:false,         
        }  
        
      return setToDoList([...toDoList,data ])     
    }
  }

    const handleOnChange = (event) => {      
      setValue(event.target.value)
      }
    
    const onDelete = (id) => {
      console.log(id);
      const findElement = toDoList.filter((e) => e.id !== id);
      setToDoList(findElement)
    }
    const saveSearch =(input) => {
      setSave(input.target.value)
    }
    const visibleTodos = toDoList.filter(item =>item.phoneNum.includes(save))
    const serchElem = () => {
        console.log(serch,save);
        
          if (!save){setToDoList(serch)
            console.log('save');
          } else{
        
        setToDoList(visibleTodos)
          }
      }
    return(
        <>     
          <TextField  
          type='number' 
          label='Search...' 
          onChange={saveSearch} 
          onInput = {(e) =>{
          e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,12)
      }}/>
          <TextField type='number' 
          required
          onInput = {(e) =>{
          e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,12)
      }}
          required  
          label="Add phoneNumber" 
          variant="filled" 
          value={value} 
          onChange={handleOnChange} />
      <br/>
           <Button 
           type='contained' 
           size='medium' 
           color='success' 
           onClick={serchElem} >
             Search
             </Button>
           <Button 
           type='contained' 
           size='medium' 
           color='success' 
           onClick={onSave} >
             Save
             </Button>
          <ul>
            {
             toDoList && toDoList.map( item =>  
             <CardNumbers 
             key={item.id} 
             todos={item} 
             onDelete={onDelete}/>)
            }
          </ul>
    </>
   
    )
    }