import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Spinner } from '../../../ui/Spinner'
import { startProjectLoad } from '../../../../store/slices/project';
import { ProjectsContainer } from "./ProjectsContainer"

export const Projects = () => {

  const dispatch = useDispatch();
  const { projects } = useSelector( state => state.project );

  useEffect(() => {

    dispatch( startProjectLoad() );
    
  }, []);
  
  return (
    <div className="">
      <h2 className="font-black text-4xl text-my-color-five uppercase">Mis Proyectos</h2>
      
      {
        ( !!projects )
          ?
          (
            <main className="p-4 mt-2">
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
