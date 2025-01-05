import { Outlet } from "react-router"
import Footer from "./components/footer/Footer"


function App() {
  

  return (
    <>
    <div className="relative h-screen">
      
      <Outlet/>
    </div>
    <Footer />

    </>
  )
}

export default App
