import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ToDo from '../interfaces/toDos'

type Props = {
  toDos: ToDo[],
  setToDos:  React.Dispatch<React.SetStateAction<ToDo[]>>
}

type newToDo = string

const CreateToDo = ({toDos, setToDos}: Props) => {
  const [inputValue, setInputValue] = useState<newToDo>('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(inputValue){
      setToDos([...toDos, {
        id: new Date(),
        toDo: inputValue
      }])
      setInputValue('')
    }
  }

  return (
    <section className='section'>
      <div>
        <h2>Create a To Do</h2>
       <Link to='/'>Go back</Link>
      </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="toDoId">
            <input id='toDoId' onChange={handleInputChange} value={inputValue} type="text" placeholder='Write your to do'/>
          </label>
          <button>Add</button>
        </form>

    </section>
  )
}

export default CreateToDo