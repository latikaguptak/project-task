import { Outlet } from "react-router"
// import {Suspense} from 'react'
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
// const LazyComponent = React.lazy(() => import("./LazyComponent"));
// const PageNotFound = () => <div>Page Not Found</div>;

function App() {
  

  return (
    <>
    <Header />
    <div className="min-h-screen">
      
      <Outlet/>
    </div>
    <Footer />

    </>
  )
}

export default App
