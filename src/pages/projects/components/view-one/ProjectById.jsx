import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import io from 'socket.io-client';

import { startGetProjectById, startProjectLoad, task_socketAdd, task_socketDelete, task_socketUpdate } from '../../../../store';
import { Spinner } from '../../../ui/Spinner';
import { modalTaskOpen } from '../../../../store/slices/ui';
import { ModalFormTask } from '../../../ui/modal';
import { TaskList } from '../';
import { CollaboratorList } from '../collaborator/CollaboratorList';
import { checkAdmin } from '../../../../helpers/checkAdmin';

let socket;

export const ProjectById = () => {

  // let socket;

  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { project } = useSelector( state => state.project );
  const { tasks } = useSelector( state => state.task );
  const { collaborators } = useSelector( state => state.collaborator );

  
  const { id } = params;

  const isAdmin = checkAdmin();

  const handleOpenModalTask = () => {

    dispatch( modalTaskOpen() );
    
  }
  
  useEffect(() => {

    socket = io(import.meta.env.VITE_BASE_API_URL);
    socket.emit('open project', id);

    dispatch( startProjectLoad() );
    dispatch( startGetProjectById( id ) );

  }, []);


  useEffect(() => {
    // socket = io(import.meta.env.VITE_BASE_API_URL);
    socket.on('add task', (task) => {
        dispatch( task_socketAdd(task) );
    });

    socket.on('delete task', (task) => {
      dispatch( task_socketDelete(task) );
    });

    socket.on('update task', (task) => {
      dispatch( task_socketUpdate(task) );
    });

  });



  if( !project ) {
    return <Spinner />
  }
  
  return (

    <section className="">

      <div className="flex justify-between items-center">

        <h2 className="font-black text-4xl text-my-color-five uppercase mb-5">{project.name}</h2>

      {
        (isAdmin)
        && (
          <Link
            className="font-black text-xl text-gray-500 hover:text-my-color-two transition-colors"
            to={`/project/edit/${id}`}
          >
            <i className="fa-solid fa-pen-to-square mr-1"></i>
            <span className=''>Editar</span>
          </Link>
        )
      }

        

      </div>

      {
        (isAdmin)
        && (
          <button
            className='text-xl mt-2 text-my-color-two border-2 border-my-color-one hover:border-my-color-two hover:rounded-xl px-2 py-1 hover:shadow-xl hover:shadow-my-color-five/20 hover:border-2 transition-all duration-500'
            onClick={ handleOpenModalTask }
          >
            <i className="fa-solid fa-plus mr-1"></i>
            Agregar Tarea
          </button>
        )
      }

      

      <h2 className="mt-10 font-black text-3xl text-my-color-five mb-5">Tareas del Proyecto</h2>
      
      <div className="">
        <ModalFormTask />
      </div>
      
      <div className="mt-10">

        {
          (!tasks?.length > 0)
            ?
            (
              <h4 className='
                cursor-pointer
                shadow-[6px_6px_14px_#c9cecf,-6px_-6px_14px_#ffffff] 
                p-4 rounded-xl 
                text-center 
                font-bold 
                text-my-color-five 
                text-2xl 
                transition-all'
              >
                No hay tareas creadas para este proyecto
              </h4>
            )
            :
            (
              tasks.map( task => (
                <TaskList key={task._id} task={task} />
              ))
            )
        }

        {
          (isAdmin)
          && (
            <>

              <div className="flex justify-between items-center my-10">

                <h2 className="font-black text-3xl text-my-color-five mb-5">Colaboradores</h2>

                <Link
                  className="font-black text-xl text-gray-500 hover:text-my-color-two transition-colors"
                  to={`/project/new-collaborator/${id}`}
                >
                  <i className="fa-solid fa-pen-to-square mr-1"></i>
                  <span className=''>Agregar</span>
                </Link>

              </div>

              {
                (!collaborators?.length > 0)
                  ?
                  (
                    <h4 className='
                      cursor-pointer
                      shadow-[6px_6px_14px_#c9cecf,-6px_-6px_14px_#ffffff] 
                      p-4 rounded-xl 
                      text-center 
                      font-bold 
                      text-my-color-five 
                      text-2xl 
                      transition-all'
                    >
                      No hay colaboradores para este proyecto
                    </h4>
                  )
                  :
                  (
                    collaborators.map( (collaborator, index) => (

                      <CollaboratorList key={collaborator._id} collaborator={collaborator} />
                    ))
                  )
              }

            </>

          )
        }
        
      </div>
        
    </section>

  )
}
