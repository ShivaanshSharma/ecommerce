
import { createHashRouter, RouterProvider } from "react-router-dom"
import HomePage from "./components/Pages/HomePage"
import ProductsPage from "./components/Pages/ProductsPage"
import MainLayout from "./components/General/MainLayout"
import ErrorPage from "./components/General/ErrorPage"
import { Provider } from "react-redux"
import { store } from "./store/store"
import Cart from "./components/Cart"
import ProductDetail from "./components/Products/ProductDetail"
import PaymentPage from "./components/Pages/PaymentPage"
import SinglePaymentPage from "./components/Pages/SinglePaymentPage"

function App() {

  const router = createHashRouter([
    { path:'/', element: <MainLayout />, children: [
      { path: '/', element: <HomePage /> },
      { path: '/products', element: <ProductsPage /> },
      { path: '/products/:productId/:price', element: <ProductDetail />},
      { path: '/cart', element: <Cart />},
      { path: '/payment/:total', element: <PaymentPage /> },
      { path: '/payment/:productId/:price', element: <SinglePaymentPage /> },
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
