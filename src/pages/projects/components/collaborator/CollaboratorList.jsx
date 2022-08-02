import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';
import { useDispatch, useSelector } from "react-redux";

import './collaborator.css';
import Swal from 'sweetalert2';
import { collab_startDeleteCollaborator } from '../../../../store/slices/collaborator/collaboratorThunk';

export const CollaboratorList = ({ collaborator }) => {


    const dispatch = useDispatch();
    const { project } = useSelector( state => state.project );

    const handleComplete = ( state ) => {

        
    };

    const handleIncomplete = ( state ) => {

        
    };

    const handleEdit = ( task ) => {


    };

    const handleDelete = ( projectId, id ) => {

        Swal.fire({
            title: '¿Seguro desea eliminar este colaborador?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
        
                dispatch( collab_startDeleteCollaborator( projectId, id ) );
                
            }
        })

    };


    const trailingActions = () => (

        <TrailingActions>
            <SwipeAction
                onClick={ () => handleDelete(project._id, collaborator.username) }
            >
                Eliminar
            </SwipeAction>
        </TrailingActions>
        
    );
    
  return (

    <SwipeableList>
        <SwipeableListItem
            // leadingActions  ={ leadingActions() }
            trailingActions ={ trailingActions() }
        >

            <div className={`
                w-full
                mb-8
                flex
                justify-between
                items-center
                p-4
                rounded-xl
                cursor-default
                shadow-[6px_6px_14px_#c9cecf,-6px_-6px_14px_#ffffff] 
            `}>

                <section className="">

                    <p className="mb-2 text-xl text-my-color-five font-medium ">Nombre: <span className='font-normal'>{collaborator.name}</span></p>

                    <p className="mb-2 text-xl text-my-color-five font-medium ">Nombre de usuario: <span className='font-normal'>{collaborator.username}</span></p>

                    <p className="mb-2 text-xl text-my-color-five font-medium ">Email: <span className='font-normal'>{collaborator.email}</span></p>

                </section>

                <section className="flex flex-col gap-2">
                    <div className="">
                        {
                            (true)
                                ?(
                                    <button
                                        className='
                                            border-2
                                            border-my-color-two
                                            hover:bg-my-color-two
                                            text-my-color-two
                                            hover:text-my-color-one 
                                            text-xl
                                            font-medium px-4 py-3 
                                            rounded-lg
                                            w-full
                                            transition-colors'
                                    >
                                        Completada
                                    </button>
                                )
                                :(
                                    <button
                                        className='
                                            border-2
                                            border-my-color-three hover:bg-my-color-three text-my-color-three 
                                            hover:text-my-color-one 
                                            text-xl
                                            font-medium px-4 py-3 
                                            rounded-lg
                                            w-full
                                            transition-colors'
                                    >
                                        Incompleta
                                    </button>  
                                )
                        }
                    </div>
                </section>
            </div>
        </SwipeableListItem>
    </SwipeableList>

  )
}
