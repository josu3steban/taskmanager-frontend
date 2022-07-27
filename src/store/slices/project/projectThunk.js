import { fectchWithToken } from "../../../helpers/fectch";
import { projectsLoad } from "./projectSlice";



export const startProjectLoad = () => {
    return async( dispatch ) => {

        const response = await fectchWithToken('project', {} , 'GET');
        const body     = await response.json();

        if( body.ok ) {

            dispatch( projectsLoad(body.projects) );

        }else {

            Swal.fire({
                title   : 'Error',
                text    : body.msg,
                icon    : 'error',
                confirmButtonText: 'Aceptar'
            });
            
        }
        
    }
};