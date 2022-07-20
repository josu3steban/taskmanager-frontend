import { Routes, Route, Navigate } from "react-router-dom"
import {  AuthHomePage,Login, Register, ConfirmPassword, ForgotPassword, NewPassword } from "../"

export const AuthRouter = () => {
  return (

    <Routes>
      <Route path="/" element={ <AuthHomePage /> }>
        <Route index element={ <Login />}/>
        <Route path="register" element={ <Register />}/>
        <Route path="confirm-account/:token" element={ <ConfirmPassword />}/>
        <Route path="forgot-password" element={ <ForgotPassword />}/>
        <Route path="new-password/:token" element={ <NewPassword />}/>
      </Route>
      
      <Route path="/*" element={ <Navigate to='/auth/' /> }/>
    </Routes>
    
  )
}
