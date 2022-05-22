import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Insert } from "../pages/Insert";
import { Details } from "../pages/Details";

export function RoutesApp() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/insert' element={<Insert />} />
            <Route path='/details' element={<Details />} />
        </Routes>
    )
}