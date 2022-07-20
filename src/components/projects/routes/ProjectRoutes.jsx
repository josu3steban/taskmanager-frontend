import { Route, Routes, Navigate } from "react-router-dom";
import { ProjectHomePage } from "../";


export const ProjectRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={ <ProjectHomePage /> }/>

        <Route path="/*" element={ <Navigate to='/' /> }/>
    </Routes>
  )
}
