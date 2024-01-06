import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home'
import { Vetor } from './pages/Vetor'
import { Galerial } from './pages/Galeria'
import { Test } from './pages/Test'

const router = createBrowserRouter([
    { 
        path: '/',
        element: <Home/>,
        children: [
            {
                path: '/',
                element: <Galerial/>
            },
            {
                path: '/vetor/pin/:id/',
                element: <Vetor/>
            },
            {
                path: '/rank',
                element: <Test/>
            },
        ]
    } 
])

export { router }