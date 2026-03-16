import { BrowserRouter, Routes, Route} from "react-router-dom"
import { Home } from "@/pages/Home"
import { NotFound } from "@/pages/NotFound"

function App() {

  return (
    <div >
      <BrowserRouter>  

        {/* Any routes that are not explicitly defined will fall back to 
        the NotFound component */}
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
