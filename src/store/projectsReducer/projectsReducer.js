import {WebsiteAPI} from "../../API/WebsiteApi";
import {v1} from "uuid";


let initialState = {
   projects:[
       {
        id: 1123,
        title: 'Merrillville Office Tower',
        address: '8585 Broadway, Merrillville',
        locationCity: 'Merrillville',
        locationState: 'IN',
        owner: 'The Napleton Group',
        architect: 'Robert Bowen',
        sf: '20,000',
        deliverySystem: 'General Contractor',
        description: 'The Merrillville Office Tower renovation included a lobby' +
            ' and office renovations of approximately 20,000FT. This 8-story renovation' +
            ' includes office buildouts, bathroom facility upgrades, and lobby remodeling.' +
            ' Adaptive-Reuse construction was performed converting the existing space into a' +
            ' bank and university. Additional scope included a fire pump installation and' +
            ' boiler repairs.',
        tags: ['Office', 'Retail', 'Adaptive-Reuse'],
        mainPhoto: "https://apextest12.b-cdn.net/N_Merrillville%20Office%20Tower/Merrillville-Ext-5.webp",
        photos: [
            'https://apextest12.b-cdn.net/projects/N_Merrillville%20Office%20Tower/Merrillville-lobby.webp',
            'https://apextest12.b-cdn.net/projects/N_Merrillville%20Office%20Tower/Merrillvlill-retail-2-600x400.webp',
            'https://apextest12.b-cdn.net/projects/N_Merrillville%20Office%20Tower/merrillvill-lobby-8585.webp',
            'https://apextest12.b-cdn.net/projects/N_Merrillville%20Office%20Tower/Merrillville-lobby-.webp',
            'https://apextest12.b-cdn.net/projects/N_Merrillville%20Office%20Tower/DSC07208-scaled.webp',
            'https://apextest12.b-cdn.net/projects/N_Merrillville%20Office%20Tower/DSC07210-scaled.webp',
            'https://apextest12.b-cdn.net/projects/N_Merrillville%20Office%20Tower/DSC07211-scaled%20(1).webp',
            'https://apextest12.b-cdn.net/projects/N_Merrillville%20Office%20Tower/DSC07211-scaled.webp',
            'https://apextest12.b-cdn.net/projects/N_Merrillville%20Office%20Tower/merrillvill-retail.webp',
            'https://apextest12.b-cdn.net/projects/N_Merrillville%20Office%20Tower/merrillvill-sign.webp',
            'https://apextest12.b-cdn.net/projects/N_Merrillville%20Office%20Tower/merrillville-cafeteria.webp',
            'https://apextest12.b-cdn.net/projects/N_Merrillville%20Office%20Tower/merrillville-windos-600x400.webp',
            'https://apextest12.b-cdn.net/projects/N_Merrillville%20Office%20Tower/Merrillville-conference-room.webp',
        ]
    },
   ],
}


const projectsReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'projectsReducer/SET_PROJECTS':
            return {...state, projects: action.projects };
        case 'projectsReducer/UPDATE_PROJECTS':
            return {...state, projects: action.projects };
        case 'projectsReducer/DELETE_EXACT_PROJECT':
            return {...state, projects: action.projects };
        case 'projectsReducer/GET_FILTERED_PROJECTS':
            console.log(action.tag)
            return {...state, projects: [ ...state.projects.filter((el)=> el.tags.includes(action.tag))] };
        default:
            return state;

    }
}
export let actions = {
    setAllApexProjects: (projects) => ({type: 'projectsReducer/SET_PROJECTS', projects}),
    updateProjectCardInfo: (projects) => ({type: 'projectsReducer/UPDATE_PROJECTS', projects}),
    deleteExactProjectCard: (projects) => ({type: 'projectsReducer/DELETE_EXACT_PROJECT', projects}),
    getFilteredProjectCards: (tag) => ({type: 'projectsReducer/GET_FILTERED_PROJECTS', tag}),
}


export const getAllProjectsTC = () => {
    return async (dispatch) => {
        const response = await WebsiteAPI.getAllProjects();
        dispatch(actions.setAllApexProjects(response));
        return response;
    }

};
export const getFilteredProjectsTC = (tag) => {
    return async (dispatch) => {
        const response = await WebsiteAPI.getAllProjects();
        dispatch(actions.setAllApexProjects(response))
        dispatch(actions.getFilteredProjectCards(tag));
    }

};
export default projectsReducer;
export const projectTemplate = {
    id: v1(),
    title: "",
    client: "",
    address: "",
    locationCity: "",
    locationState: "",
    owner: "",
    architect: "",
    sf: "",
    deliverySystem: "",
    description: "",
    tags: [],
    projectVideo: "",
    projectPanorama: "",
    mainPhoto: "",
    photos: []
};
