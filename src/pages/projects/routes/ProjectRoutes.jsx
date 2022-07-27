import { Route, Routes, Navigate } from "react-router-dom";
import { ProjectHomePage } from "../";
import { Projects, NewProject } from "../components/";


export const ProjectRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={ <ProjectHomePage /> }>
          <Route index element={ <Projects /> } />
          <Route path="new-project" element={ <NewProject /> } />
        </Route>

        <Route path="/*" element={ <Navigate to='/' /> }/>
    </Routes>
  )
}
