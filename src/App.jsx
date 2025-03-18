
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "./components/HomePage"
import ProductsPage from "./components/ProductsPage"
import MainLayout from "./components/MainLayout"
import ErrorPage from "./components/ErrorPage"
import { Provider } from "react-redux"
import { store } from "./store/store"

function App() {

  const router = createBrowserRouter([
    { path:'/', element: <MainLayout />, children: [
      { path: '/', element: <HomePage /> },
      { path: '/products', element: <ProductsPage /> },
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
