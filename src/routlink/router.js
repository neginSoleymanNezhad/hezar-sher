import { BrowserRouter, Routes, Route } from "react-router-dom";
import Faalhafez from "../page/faalhafez";
import FirstPage from "../page/firstPage";
import Ganjine from "../page/ganjine";
import { routelink } from "./routelink";
function Router() {
    const {firstPage , faalhafez , ganjine} = routelink;

    return (
        <BrowserRouter>
        <Routes>
            <Route exact path={firstPage} element={<FirstPage />} />
            <Route exact path={faalhafez} element={<Faalhafez />} />
            <Route exact path={ganjine} element={<Ganjine />} />

        </Routes>
    </BrowserRouter>  
        );
}

export default Router;