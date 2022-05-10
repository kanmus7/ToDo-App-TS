import { Link } from 'react-router-dom'
import ToDo from '../interfaces/toDos'
import RenderToDoList from '../components/RenderToDoList'

type Props = {
  toDos: ToDo[],
  setToDos:  React.Dispatch<React.SetStateAction<ToDo[]>>
}

const ToDoList = ({toDos, setToDos}: Props) => {
  return (
    <section className='section'>
      <div className='container-button'>
        <Link to='/create' className='container-button-addToDo' >Add a ToDo</Link>
      </div>
      <div>
       {toDos.length? <RenderToDoList toDos = {toDos} setToDos={setToDos} /> : <h2>You haven't registered ToDo's yet!</h2>}
      </div>
    </section>
  )
}

export default ToDoList
