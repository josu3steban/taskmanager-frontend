import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import io from 'socket.io-client';

import { Spinner } from '../../../ui/Spinner'
import { clearActiveProject, startProjectLoad } from '../../../../store/slices/project';
import { ProjectsContainer } from "./ProjectsContainer"

export const Projects = () => {


  const dispatch = useDispatch();
  const { projects } = useSelector( state => state.project );

  
  useEffect(() => {

    dispatch( startProjectLoad() );
    
  }, []);
  
  return (
    <div className="">
      <h2 className="font-black text-4xl text-my-color-five uppercase mb-2 animate__animated animate__fadeIn animate__faster">Mis Proyectos</h2>
      
      {
        ( !!projects )
          ?
          (
            <main className="p-4 animate__animated animate__fadeIn animate__faster">
              <ProjectsContainer />
            </main>
          )
          :
          (
            <Spinner />
          )
      }
      
      
      
    </div>
  )
}
