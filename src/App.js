import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import AllRoutes from "./component/Route/route";
import AllDepots from "./component/Depot/depot";
import Footer from "./footer/footer";
import Header from "./header/header";
import Login from "./component/Login/Login";
import AdminRoute from "./component/Administrator/adminRoute";


function App() {
  return (
      <div className='App'>
          <div className='page-container'>
              <div className='content-wrapper'>
                  <BrowserRouter>
                      <Header/>
                      <Routes>
                          <Route path="/" element={<Login/>}/>
                          <Route path="depots" element={<AllDepots/>}/>
                          <Route path="login" element={<Login/>}/>
                          <Route path="admin" element={<AdminRoute/>}/>
                          <Route path="routes" element={<AllRoutes/>}/>
                      </Routes>
                  </BrowserRouter>
              </div>

              <Footer/>
          </div>
      </div>
);
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
