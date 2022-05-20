import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Insert } from "../pages/Insert";
import { Update } from "../pages/Update";

interface RoutesProps {
    onOpenDeleteModal: () => void
}

export function RoutesApp({ onOpenDeleteModal }: RoutesProps) {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/insert' element={<Insert />} />
            <Route path='/update' element={<Update onOpenDeleteModal={onOpenDeleteModal} />} />
        </Routes>
        
    )
}