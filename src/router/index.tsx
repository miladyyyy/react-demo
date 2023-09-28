import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import { DashboardOutlined } from '@ant-design/icons'

const Dashboard = lazy(() => import('../views/Dashboard'))

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        title: 'Dashboard',
        icon: <DashboardOutlined />,
        element: <Dashboard />,
      },
    ],
  },
]

export { routes }

export default createBrowserRouter(routes)
