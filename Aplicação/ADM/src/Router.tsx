import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home'
import { Search } from './pages/Search'
import { NovoVetores } from './pages/NovoVetores'

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
                element: <NovoVetores/>
            },
            {
                path: '/rank',
                element: <div>rank</div>
            },
        ]
    } 
])

export { router }