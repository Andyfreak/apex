import {v4 as uuidv4} from "uuid";
import {PersonBottomDescription, PersonDescription} from "./stringConsts";

export const teamArr = [
    {
        id: uuidv4(),
        name: "Paola Placko",
        position: "Lead Estimator / Architectural Designer",
        aboutPerson: PersonDescription.PaolaPlacko,
        bottomDescription: "",
        photo: "https://apextest12.b-cdn.net/teamFaces/Paola%20Placko.jpg"
    },
    {
        id: uuidv4(),
        name: "Olga Podoba",
        position: "Human Resource Specialist",
        aboutPerson: PersonDescription.OlgaPodoba,
        bottomDescription: PersonBottomDescription.OlgaPodoba,
        photo: "https://apextest12.b-cdn.net/teamFaces/Olga%20Podoba.jpg"
    },
    {
        id: uuidv4(),
        name: "Adrian Caushi",
        position: "Vice President",
        aboutPerson: PersonDescription.AdrianCaushi,
        bottomDescription: "",
        photo: "https://apextest12.b-cdn.net/teamFaces/Adrian%20Caushi.jpg"
    },
    {
        id: uuidv4(),
        name: "Noah Morkunas",
        position: "Estimator/ Pre Construction Manager",
        aboutPerson: PersonDescription.NoahMorkunas,
        bottomDescription: PersonBottomDescription.NoahMorkunas,
        photo: "https://apextest12.b-cdn.net/teamFaces/Noah%20Morkunas.jpg"
    },
    {
        id: uuidv4(),
        name: "Djordje Djanjus",
        position: " Director Of PreConstruction",
        aboutPerson: PersonDescription.DjordjeDjanjus,
        bottomDescription: '',
        photo: "https://apextest12.b-cdn.net/teamFaces/Djordje%20Janjus.jpg"
    },
    {
        id: uuidv4(),
        name: "Bashkim Tafilaj",
        position: "Superintendent",
        aboutPerson: PersonDescription.BashkimTafilaj,
        bottomDescription: '',
        photo: "https://apextest12.b-cdn.net/teamFaces/Bashkim%20Tafiliaj.jpg"
    },
    {
        id: uuidv4(),
        name: "Giovanna Caushi",
        position: "Human Resource Specialist",
        aboutPerson: PersonDescription.GiovannaCaushi,
        bottomDescription: PersonBottomDescription.GiovannaCaushi,
        photo: "https://apextest12.b-cdn.net/teamFaces/Giovanna%20Caushi.jpg"
    },
    {
        id: uuidv4(),
        name: "Erik Olson",
        position: "ProjectCard Engineer",
        aboutPerson: PersonDescription.ErikOlson,
        bottomDescription:"",
        photo: "https://apextest12.b-cdn.net/teamFaces/Erik%20Olson.jpg"
    },

    {
        id: uuidv4(),
        name: "Dharmentra Choudary",
        position: "Scheduler / ProjectCard Engineer",
        aboutPerson: PersonDescription.DharmentraChoudary,
        bottomDescription:PersonBottomDescription.DharmentraChoudary,
        photo: "https://apextest12.b-cdn.net/teamFaces/Dharmendra%20Choudhary.jpg"
    },

];
