import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstPage from "../page/firstPage/firstPage";
import { routelink } from "./routelink";
function Router() {
    const {firstPage} = routelink;

    return (
        <BrowserRouter>
        <Routes>
            <Route exact path={firstPage} element={<FirstPage />} />
        </Routes>
    </BrowserRouter>  
        );
}

export default Router;