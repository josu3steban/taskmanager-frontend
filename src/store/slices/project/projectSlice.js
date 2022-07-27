import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    projects      : null,
    project       : null,
    activeProject : null
}

export const projectSlice = createSlice({

    name: 'project',

    initialState,

    reducers: {

        projectsLoad: ( state, action ) => {

            state.projects = action.payload;
            
        },

        setActiveProject: ( state, action ) => {

            state.activeProject = action.payload;

        },

        clearActiveProject: ( state, action ) => {

            state.activeProject = null;
            state.projects      = null;
            
        }
        
    }
    
});

export const { projectsLoad, setActiveProject, clearActiveProject } = projectSlice.actions;