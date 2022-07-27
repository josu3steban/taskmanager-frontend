import { useDispatch } from "react-redux";
import { setActiveProject } from "../../../../store/slices/project";

export const ProjectsList = ({ project }) => {

  const dispatch = useDispatch();
  
  const dateFormat = new Date( project.delivery );
  
  const handleSelectActiveProject = ( idProject ) => {

    dispatch( setActiveProject(idProject) );
    
  }
  
  return (
    
    <div
      onClick={ () => handleSelectActiveProject( project._id ) }
      className="flex flex-col transition-colors duration-200 p-2 mb-10 border-l-4  border-my-color-two hover:border-my-color-five cursor-pointer"
    >

      <h3 className="text-2xl font-bold text-my-color-five mb-3 tracking-wide">{ project.name }</h3>

      <p className="text-lg text-my-color-five font-medium">{ project.description }</p>
      
      <span className="self-end text-my-color-three font-medium">Fehca de entrega: <span className="text-my-color-five">{`${dateFormat.getDate()}/${dateFormat.getMonth()+1}/${dateFormat.getFullYear()}`}</span> </span>
      
    </div>
    
  )
}
