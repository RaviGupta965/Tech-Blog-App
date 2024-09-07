import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Authlayout,Login } from './components/index.js'
import AllPost from './pages/allpost.jsx'
import Editpost from './pages/editpost.jsx'
import Post from './pages/post.jsx'
import Home from './pages/home.jsx'
import Signup from './pages/signup.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    children:[
      {
        path:'/',
        element:<Home />,
      },
      {
        path:'/login',
        element:(
          <Authlayout authentication={false}>
            <Login />
          </Authlayout>
        )
      },
      {
        path:'/Signup',
        element:(
          <Authlayout authentication={false}>
            <Signup />
          </Authlayout>
        )
      },
      {
        path:'/all-Post',
        element:(
          <Authlayout authentication>
            {" "}
            <AllPost/>
          </Authlayout>
        )
      },
      {
        path:'/edit-post/:slug',
        element:(
          <Authlayout authentication>
            {' '}
            <Editpost />
          </Authlayout>
        )
      },
      {
        path:'/post/:slug',
        element: <Post />
      },
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store = {store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
