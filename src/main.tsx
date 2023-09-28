import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router/index.tsx'
import './styles/index.css'

const root = ReactDOM.createRoot(document.getElementById('root')!)

root.render(<RouterProvider router={router}></RouterProvider>)
