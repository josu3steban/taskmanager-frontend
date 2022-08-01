import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../../../helpers/formatDate";
import { setActiveProject } from "../../../../store/slices/project";

export const ProjectsList = ({ project }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate()
  
  // const dateFormat = formatDate(project.delivery);
  
  const handleSelectActiveProject = ( idProject ) => {

    dispatch( setActiveProject(idProject) );
    navigate( `/project/${idProject}` );
    
  }
  
  return (
    
    <section
      onClick={ () => handleSelectActiveProject( project._id ) }
      className="
        flex
        flex-col
        p-2
        mb-10
        border-l-4 
        border-my-color-two
        hover:shadow-[6px_6px_14px_#c9cecf,-6px_-6px_14px_#ffffff]
        hover:rounded-xl
        hover:border-my-color-five
        cursor-pointer
        transition-all
        duration-300"
    >

      <h3 className="text-2xl font-bold text-my-color-five mb-3 tracking-wide">{ project.name }</h3>

      <p className="text-lg text-my-color-five font-medium">{ project.description }</p>
      
      <span className="self-end text-my-color-three font-medium">Fehca de entrega: <span className="text-my-color-five">{ formatDate(project.delivery) }</span> </span>
      
    </section>
    
  )
}
