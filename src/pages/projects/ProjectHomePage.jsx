import { Outlet } from "react-router-dom"
import { Header } from "./components/ui/"

export const ProjectHomePage = () => {
  return (
    <div className="bg-my-color-one h-screen  box-border">

      <Header />

      <main className="w-5/6 m-auto mt-10">
        <Outlet />
      </main>
      
    </div>
  )
}
