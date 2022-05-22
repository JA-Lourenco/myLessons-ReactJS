import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Insert } from "../pages/Insert";
import { Details } from "../pages/Details";
import { Edit } from "../pages/Edit";

export function RoutesApp() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/insert' element={<Insert />} />
            <Route path='/details' element={<Details />} />
            <Route path='/edit' element={<Edit />} />
        </Routes>
    )
}