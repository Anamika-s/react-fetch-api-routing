import { Links } from "./Links"
import { AboutUs } from "./AboutUs"
import { ContactUs } from "./ContactUs"
import { App4 } from "./App4"
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import { App2 } from "./App2";
import { App1 } from "./App1";
export const MainRoutingComp = ()=>
{
    return(
        <>
    <BrowserRouter>
    <Links/>
    <Routes>
        <Route path="" element={<App2/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="/register" element={<App1/>}/>
        
    </Routes>
    </BrowserRouter>
    </>
    )

}