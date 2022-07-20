import { Route, Routes } from "react-router-dom"
import { AuthRouter } from "../components/auth/routes"
import { ProjectRoutes } from "../components/projects/routes";


export const AppRouter = () => {

  const checking = true;
  
  return (
    <Routes>
      {
        ( checking )
          ? <Route path='/auth/*' element={ <AuthRouter /> }/>

          : <Route path="/*" element={ <ProjectRoutes /> }/>
      }

      <Route path="/*" element={ <AuthRouter/> } />
        
    </Routes>
  )
}
