import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { startGetProjectById, startProjectLoad } from '../../../../store';
import { Spinner } from '../../../ui/Spinner';
import { FormCollaborator } from './FormCollaborator';
import { ViewCollaborator } from './ViewCollaborator';

export const NewCollaborator = () => {

  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const { project } = useSelector( state => state.project );
  const { searching } = useSelector( state => state.searching );
  const { collaborator } = useSelector( state => state.collaborator );

  const { id } = params;


  useEffect(() => {

    dispatch( startProjectLoad() );
    dispatch( startGetProjectById( id ) );

  }, []);


  if( !project ) {
    return <Spinner />
  }
    
  return (

    <>

      <h2 className="font-black text-4xl text-my-color-five uppercase mb-5">Agregar Colaborado al Proyecto: {project?.name}</h2>

      <section className="w-2/4 mx-auto p-5 neumorphism mt-10">

        <FormCollaborator />
        
      </section>
      

      {

        (!searching)
          ? (
            
            (!!collaborator)
              && (
                <section className="w-2/4 mx-auto p-5 neumorphism mt-10 animate__animated animate__bounceIn">

                  <ViewCollaborator />

                </section>
              )

          )
          : (

            <Spinner />
            
          )

      }

      
      
    </>
  )
}
