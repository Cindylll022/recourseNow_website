import { HashRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./Pages/Home"
import OurTeam from "./Pages/OurTeam"
import TakeAction from "./Pages/TakeAction"
import ContactUs from "./Pages/ContactUs"
import Initiatives from "./Pages/Initiatives"

const App = () => {

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Initiatives" element={<Initiatives />} />
        <Route path="/OurTeam" element={<OurTeam />} />
        <Route path="/TakeAction" element={<TakeAction />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
