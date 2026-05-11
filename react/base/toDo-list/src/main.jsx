import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TodoList from './todo'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TodoList/>
  </StrictMode>,
)
