import React, { useState } from 'react';
import {Routes, Route} from 'react-router-dom'
import CreateToDo from '../views/CreateToDo';
import ToDoList from '../views/ToDoList';
import NotFound from '../views/NotFound';
import Layout from '../components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDo from '../interfaces/toDos'


const App: React.FC = () => {
  const [toDos, setToDos] = useState<ToDo[]>([])
  return (
     <Layout>
      <Routes>
        <Route path='/' element={<ToDoList toDos={toDos} setToDos={setToDos}/>} />
        <Route path='/create' element={<CreateToDo toDos={toDos} setToDos={setToDos} />} />
        <Route path='/not-found' element={<NotFound/>} />
      </Routes>
    </Layout>
  );
}

export default App;
