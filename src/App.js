import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import AllRoutes from "./component/routes";
import AllDepots from "./component/Depot/depot";
import Footer from "./footer/footer";
import Header from "./header/header";


function App() {
  return (
      <div>
      <Header/>
      <BrowserRouter>
          <Routes>
              <Route path="/"       element={<AllRoutes />}/>
              <Route path="depots"  element={<AllDepots />} />
          </Routes>
      </BrowserRouter>
      <Footer/>
      </div>

);
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


export default App;
