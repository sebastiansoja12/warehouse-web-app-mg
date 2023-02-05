import React, {useEffect} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


import './App.css';

import {useStateContext} from './contexts/ContextProvider';
import Sidebar from "./component/Route/menu/sidebar";
import Header from "./header/header";
import AdminRoute from "./component/Administrator/adminRoute";
import AllRoutes from "./component/Route/route";
import AllDepots from "./component/Depot/depot";
import LoginPage from "./component/Login/LoginPage";
import ParcelRegistration from "./component/Route/register-route/parcelregistration";
import Footer from "./footer/footer";
import ThemeSettings from "./component/ThemeSettings";

const App = () => {
    const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();

    useEffect(() => {
        const currentThemeColor = localStorage.getItem('colorMode');
        const currentThemeMode = localStorage.getItem('themeMode');
        if (currentThemeColor && currentThemeMode) {
            setCurrentColor(currentThemeColor);
            setCurrentMode(currentThemeMode);
        }
    }, []);

    return (
        <div className={currentMode === 'Dark' ? 'dark' : ''}>
        <div className='App'>
            <div className='page-container'>
                <div className='content-wrapper'>
            <BrowserRouter>
                {
                    window.location.pathname!=="/"? <Header/> : null
                }
                <div className="flex relative dark:bg-main-dark-bg">
                    {themeSettings && (<ThemeSettings />)}
                    {window.location.pathname==="/register/route" ? (
                        <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
                            <Sidebar/>
                        </div>
                    ) : (
                        <div className="w-0 dark:bg-secondary-dark-bg overflow-x-auto">

                        </div>
                    )}
                    <div
                        className={
                            window.location.pathname==="/register/route"
                            ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                            : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
                        }
                    >
                        <div>
                            <Routes>
                                <Route path="/" showHeaderAndFooter={false} element={<LoginPage/>}/>
                                <Route path="depots" element={<AllDepots/>}/>
                                <Route path="login" showHeaderAndFooter={false} element={<LoginPage/>}/>
                                <Route path="admin" element={<AdminRoute/>}/>
                                <Route path="routes" element={<AllRoutes/>}/>
                                <Route path="register/route" element={<ParcelRegistration/>}/>
                            </Routes>

                            </div>
                        </div>
                    </div>
                </BrowserRouter>

                    </div>
                </div>
                {
                    window.location.pathname!=="/"? <Footer/> : null
                }
            </div>
        </div>
    );
};

export default App;
