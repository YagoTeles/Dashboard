import RadioSelect from "../../pages/ranking/RadioSelect";
import SimpleCheckBox from "../../pages/ranking/SimpleCheckBox";
const routesData = [
    { name: "Ranking", route: "/ranking", buttons: [<SimpleCheckBox/>,<RadioSelect/>] },
    { name: "Perfil", route: "/perfil", buttons: [] },
    { name: "Compare", route: "/compare", buttons: [] }
];

export default routesData;