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
  //   const handlerValueChange = (e) => setValue(e.target.value);
    
  //       // setValue((prevState) => [...prevState,data])

     const onSave = (event) =>{
      event.preventDefault();
      setSearch(toDoList);
      if (toDoList.some((e) => e.phoneNum == value)){
        return console.log('errrrr');
    } else {
    
      const data ={
        phoneNum:value,
        id:value,
        complited:false,
        
      }
      return setToDoList([...toDoList,data ])
      console.log(toDoList)
      setValue('')
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
      const serchElem = (element) => {
        console.log(serch,save);
        
          if (!save){setToDoList(serch)
          } else{
        const filtredElements =toDoList.filter((filtr) => filtr.id = save )
        setToDoList(filtredElements)
          }
      }
    return(
        <>
        
      
      <TextField  type='text' label='Search...' onChange={saveSearch}/>
      <TextField type='phone' required inputProps={{ inputMode: 'numeric', pattern: '[0-9]' }}
       required  label="Add phoneNumber" variant="filled"  onChange={handleOnChange} />
      <br/>
      <Button type='outlined' size='medium' color='success' onClick={serchElem} >Search</Button>
      <Button type='outlined' size='medium' color='success' onClick={onSave} >Save</Button>
          <ul>
            {
             toDoList && toDoList.map( item =>  <CardNumbers key={item.id} todos={item} onDelete={onDelete}/>)
            }
          </ul>
    </>
   
    )
    }