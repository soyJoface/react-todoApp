import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
// import { HooksApp } from './HooksApp'
// import { CounterApp } from './01-useState/CounterApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { SimpleForm } from './02useEffect/SimpleForm'
// import { FormWithCustomHook } from './02useEffect/FormWithCustomHook'
// import { MultipleCustomHook } from './03-examples/MultipleCustomHook'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { Memorize } from './06-memos/Memorize'
// import { MemoHook } from './06-memos/MemoHook'
// import { CallBackHook } from './06-memos/CallBackHook'
// import { Padre } from './07-tarea-memo/Padre'
// import '../src/08-useReducer/intro-reducer';
import { TodoApp } from './08-useReducer/TodoApp'


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <TodoApp />
  // </React.StrictMode>,
)
