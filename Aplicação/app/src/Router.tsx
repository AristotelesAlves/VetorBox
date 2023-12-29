import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home'
import { Search } from './pages/Search'

const router = createBrowserRouter([
    { 
        path: '/',
        element: <Home/>,
    },
    {
        path: '/search/:slug',
        element: <Search/>,
    },
    {
        path: '*',
        element: 
            <div>
                <h1>404</h1>
                <p className='flex gap-1 items-center'>
                    Ops! Pagina não encontrada, <a className='text-sky-600' href="/">retorna ao inicio!</a>
                </p>
            </div>,
    }
])

export { router }