import { Outlet } from "react-router-dom"
import { Header } from "./components/ui/"

export const ProjectHomePage = () => {
  return (
    <div className="bg-my-color-one h-screen  box-border overflow-y-scroll animate__animated animate__fadeIn animate__faster">

      <Header />

      <main className="w-5/6 m-auto my-10">
        <Outlet />
      </main>
      
    </div>
  )
}
