import {Route,BrowserRouter,Routes,Navigate} from "react-router-dom";
import Ranking from "../pages/ranking/Ranking";
import Sidebar from "../components/Sidebar/Sidebar";
import Perfil from "../pages/perfil/Perfil";
import Compare from "../pages/compare/Compare";
import {GroupsProvider } from '../contexts/GroupsContext'
function RouteApp() {

    return ( 
        <GroupsProvider>
            <BrowserRouter>     
                <Sidebar>       
                    <Routes>
                        <Route path="/" element = {<Navigate to="/ranking" />}/> 
                        <Route path="/perfil" element = {<Perfil/>}/> 
                        <Route path="/compare" element = {<Compare/>}/> 
                        <Route path="/ranking" element = {<Ranking/>}/> 
                    </Routes> 
                </Sidebar>           
            </BrowserRouter> 
        </GroupsProvider>
     );
}

export default RouteApp;