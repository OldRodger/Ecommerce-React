import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from "react-router-dom";
import NotFoundPage from "../pages/Error/NotFoundPage";
import MainLayout from "../pages/Layouts/MainLayouts";
import WelcomePage from "../pages/WelcomePage";

import hero from '../assets/images/hero-3.jpg';
import heroMen from '../assets/images/hero-2.jpg';
import heroWomen from '../assets/images/female-hero-2.jpg';
import DetailPage from "../pages/DetailPage";

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<MainLayout />} errorElement={<NotFoundPage />}>
      <Route path="/" element={<Navigate to='category/jackets' replace /> } />
      <Route path="category" element={<WelcomePage hero={hero} />}>
        <Route path=":cateID" element={<DetailPage/>}/>
      </Route>
      <Route path="men" element={<WelcomePage hero={heroMen} />}>
        <Route path=":cateID" element={<DetailPage sex="M"/>}/>
      </Route>
      <Route path="women" element={<WelcomePage hero={heroWomen} />}>
        <Route path=":cateID" element={<DetailPage sex="F"/>}/>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  ))
  return <RouterProvider router={router} />
}

export default App;
