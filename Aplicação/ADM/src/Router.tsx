import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home'
import { Vetor } from './pages/Vetor'
import { Galerial } from './pages/Galeria'

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
                element: <h1>oi</h1>
            },
        ]
    } 
])

export { router }