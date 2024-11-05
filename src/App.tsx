import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Cart from './components/Cart'
import Wishlist from './components/Wishlist'
import RootLayout from './layouts/RootLayout'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Order from './pages/Order'
import Statistics from './pages/Statistics'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: ({ request, context }) => {
          const searchParams = new URL(request.url).searchParams
          const selectedCategory = searchParams.get('category')?.trim() || 'all'

          // if(selectedCategory==='all') return redirect('/')
          // context={a:'aaa'}
          console.log(context)

          return { selectedCategory }
        },
      },
      {
        path: '/statistics',
        element: <Statistics />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
          {
            path: '/dashboard',
            element: <Navigate to={'/dashboard/cart'} />,
          },
          {
            path: '/dashboard/cart',
            element: <Cart />,
          },
          {
            path: '/dashboard/wishlist',
            element: <Wishlist />,
          },
        ],
      },
      {
        path: '/order',
        element: <Order />,
      },
    ],
  },
])

const App = () => <RouterProvider router={router} />

export default App
