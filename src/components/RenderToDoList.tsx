import React from 'react'
import ToDo from '../interfaces/toDos'
import trashImg from '../img/trash.svg'
import '../styles/renderToDoList.css'

type Props = {
    toDos: ToDo[],
    setToDos:  React.Dispatch<React.SetStateAction<ToDo[]>>
  }
  
const RenderToDoList = ({toDos, setToDos}: Props) => {
    const  handleDeleteToDo = (event: React.MouseEvent<HTMLDivElement>) => {
        const toDo: string = event.currentTarget.children[0].innerHTML
        setToDos(toDos.filter(item => {
            return item.toDo !== toDo
        }))
    }

  return (
    <ol className='container-ol'>
        {toDos.map((toDo, i)=> (   
                <div key={i} className='container-list' onClick={handleDeleteToDo}>
                    <div className='container-list-toDo'>
                        <li>{toDo.toDo}</li>  
                    </div>
                        <img src={trashImg}  alt='Delete to do'/>
                </div>         
        ))}
    </ol>
  )
}

export default RenderToDoList