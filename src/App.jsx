
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "./components/HomePage"
import ProductsPage from "./components/ProductsPage"
import MainLayout from "./components/MainLayout"
import ErrorPage from "./components/ErrorPage"
import { Provider } from "react-redux"
import { store } from "./store/store"
import Cart from "./components/Cart"
import ProductDetail from "./components/ProductDetail"

function App() {

  const router = createBrowserRouter([
    { path:'/ecommerce', element: <MainLayout />, children: [
      { path: '/ecommerce', element: <HomePage /> },
      { path: '/ecommerce/products', element: <ProductsPage /> },
      { path: '/ecommerce/products/:productId/:title/:price', element: <ProductDetail />},
      { path: '/ecommerce/cart', element: <Cart />}
    ],
    errorElement: <ErrorPage /> }
  ],
)

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
