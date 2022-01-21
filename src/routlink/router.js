import { BrowserRouter, Routes, Route } from "react-router-dom";
import Faalhafez from "../page/faalhafez";
import FirstPage from "../page/firstPage";
import { routelink } from "./routelink";
function Router() {
    const {firstPage , faalhafez} = routelink;

    return (
        <BrowserRouter>
        <Routes>
            <Route exact path={firstPage} element={<FirstPage />} />
            <Route exact path={faalhafez} element={<Faalhafez />} />
        </Routes>
    </BrowserRouter>  
        );
}

export default Router;