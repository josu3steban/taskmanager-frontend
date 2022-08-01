import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { startGetProjectById, task_LoadTasks } from '../../../../store';
import { Spinner } from '../../../ui/Spinner';
import { modalTaskOpen } from '../../../../store/slices/ui';
import { ModalFormTask } from '../../../ui/modal';
import { TaskList } from '../';


export const ProjectById = () => {

  const params = useParams();
  const dispatch = useDispatch();
  const { project } = useSelector( state => state.project );
  const { tasks } = useSelector( state => state.task );

  
  const { id } = params;

  const handleOpenModalTask = () => {

    dispatch( modalTaskOpen() );
    
  }
  

  useEffect(() => {

    dispatch( startGetProjectById( id ) );

  }, []);
  

  if( !project ) {
    return <Spinner />
  }
  
  return (
    <section className="">


      <div className="flex justify-between items-center">

        <h2 className="font-black text-4xl text-my-color-five uppercase mb-5">Proyecto</h2>

        <Link
          className="font-black text-xl text-gray-500 hover:text-my-color-two transition-colors"
          to={`/project/edit/${id}`}
        >
          <i className="fa-solid fa-pen-to-square mr-1"></i>
          <span className=''>Editar</span>
        </Link>

      </div>

      <button
        className='text-xl mt-2 text-my-color-two border-2 border-my-color-one hover:border-my-color-two hover:rounded-xl px-2 py-1 hover:shadow-xl hover:shadow-my-color-five/20 hover:border-2 transition-all duration-500'
        onClick={ handleOpenModalTask }
      >
        <i className="fa-solid fa-plus mr-1"></i>
        Agregar Tarea
      </button>
      
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

        
        
      </div>
      
    </section>
  )
}
