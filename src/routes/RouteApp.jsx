import {Route,BrowserRouter,Routes,Navigate} from "react-router-dom";
import Main from "../pages/Main";
import Sidebar from "../components/Sidebar/Sidebar";
function RouteApp() {

    return ( 
        
        <BrowserRouter>     
        <Sidebar/>          
            <Routes>
                <Route path="/" element = {<Main/>}/> 
            </Routes>       
        </BrowserRouter> 
     );
}

export default RouteApp;