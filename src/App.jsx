import { Outlet } from "react-router"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"


function App() {
  

  return (
    <>
    <Header/>
    <div className="relative h-screen">
      
      <Outlet/>
    </div>
    <Footer />

    </>
  )
}

export default App
