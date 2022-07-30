import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { startLogout } from '../../../../../store/slices/auth/'

import './header.css';
import { clearActiveProject } from '../../../../../store/slices/project/projectSlice';

export const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { username } = useSelector( state => state.auth );
  
  const handleLogout = () => {

    dispatch( startLogout() );
    
  };

  const hanldeNewProject = () => {

    dispatch( clearActiveProject() );
    navigate('/new-project');

  }
  
  return (
    <header className="flex justify-between items-center px-5 py-5">
      <Link to='/' className="font-black text-3xl text-my-color-five cursor-default">TaskManager</Link>

      <input
        className="p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-my-color-two transition-all "
        placeholder="Buscar un proyecto"
        type="text"
        name=""
        id=""
      />

      <div className="flex items-center justify-center">

        <button
          className='flex items-center gap-2 mr-5 p-2 rounded-md hover:shadow-my-color-five/10 hover:shadow-xl transition-shadow'
          onClick={ hanldeNewProject }
        >
          <i className="fa-regular fa-square-plus text-4xl text-my-color-two relative top-[2px] hover:font-black"></i>
          <h2 className='text-2xl font-black uppercase text-my-color-two'>Nuevo Proyecto</h2>
        </button>
        
        <div className="dropdown">

          <span className='mr-1 text-my-color-five font-medium text-xl border-b-my-color-two border-r-my-color-two'>Bienvenido, { username }</span>
          <span className='border-r-4 rounded-xl border-r-my-color-two animate-pulse'></span>
          
          <div className="dropdown__content text-my-color-five">

            <Link
              className='text-lg block my-3 border-b-2 border-my-color-one hover:border-b-2 hover:border-b-my-color-five transition-colors'
              to='/proyectos'
            >
              Mis Proyectos
            </Link>
            
            <Link
              className='text-lg block border-b-2 border-my-color-one hover:border-b-2 hover:border-b-my-color-five transition-colors'
              to='/proyectos'
            >
              Mis Colaboraciones
            </Link>
            
            <button
              className='bg-my-color-five w-full rounded-md text-my-color-one py-1 font-medium tracking-wider hover:bg-my-color-three transition-colors mt-5'
              onClick={ handleLogout }
            >Salir</button>

          </div>
        </div>
      </div>

    </header>
  )
}
