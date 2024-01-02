import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home'
import { Vetor } from './pages/Vetor'

const router = createBrowserRouter([
    { 
        path: '/',
        element: <Home/>,
        children: [
            {
                path: '/vetores',
                element: <div>vetores</div>
            },
            {
                path: '/novo-vetor',
                element: <Vetor/>
            },
            {
                path: '/rank',
                element: <div>rank</div>
            },
        ]
    } 
])

export { router }