import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ContentLayout } from '../layouts/ContentLayout';
import { ClansScreen } from '../pages/clans/ClansScreen';
import { HomeScreen } from './../pages/home/HomeScreen';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ContentLayout />}>
                    <Route index element={<HomeScreen />} />
                    <Route path="/clans" element={<ClansScreen />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
