import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "@/pages/AboutPage";
import {SiteProvider} from "@/context/SiteContext";
import LayoutPage from "@/pages/LayoutPage";
import HomePage from "@/pages/HomePage";
import ContactPage from "@/pages/ContactPage";
import ScrollToHash from "@/components/utils/ScrollToHash";


function App() {
  return (
      <>
          <Router>
              <SiteProvider>
                  <ScrollToHash/>
                  <Routes>
                      <Route path="/" element={<LayoutPage />}>
                          <Route index element={<HomePage />} />
                          <Route path="/about" element={<AboutPage />} />
                          <Route path="/contact" element={<ContactPage />} />
                      </Route>
                  </Routes>
              </SiteProvider>
          </Router>
      </>

  )
}

export default App