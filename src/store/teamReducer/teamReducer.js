import {WebsiteAPI} from "../../API/WebsiteApi";
import {actions} from "../projectsReducer/projectsReducer";
import {v1} from "uuid";


let initialState = {
    team:[],
}


const teamReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'teamReducer/SET_TEAM_MEMBERS':
            return {...state, team: action.team };
        case 'teamReducer/UPDATE_MEMBERS_INFO':
            return {...state, team: action.team };
        case 'teamReducer/DELETE_EXACT_MEMBER_INFO':
            return {...state, team: action.team };
        default:
            return state;

    }
}
export let actionsTeam = {
    setAllApexTeam: (team) => ({type: 'teamReducer/SET_TEAM_MEMBERS', team}),
    updatePersonalCardInfo: (team) => ({type:'teamReducer/UPDATE_MEMBERS_INFO', team}),
    deletePersonalCardInfo: (team) => ({type:'teamReducer/DELETE_EXACT_MEMBER_INFO', team}),
}

export const getAllTeamMembersTC = () => {
    return async (dispatch) => {
        const response = await WebsiteAPI.getAllTeam();
        dispatch(actionsTeam.setAllApexTeam(response));
    }
};
export default teamReducer;

export const teamMemberTemplate = {
    aboutPerson: '',
    bottomDescription: '',
    id: v1(),
    name: '',
    photo: '',
    position: ''
}
