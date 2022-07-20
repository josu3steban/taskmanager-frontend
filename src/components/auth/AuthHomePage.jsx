import { Outlet } from 'react-router-dom';

export const AuthHomePage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">

      <main
        className='
          w-2/5
          
        '
      >
        <Outlet />
      </main>
      
    </div>
  )
}
