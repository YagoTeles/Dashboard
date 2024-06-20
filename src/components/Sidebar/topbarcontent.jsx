import RadioSelect from "../../pages/ranking/RadioSelect";
import SimpleCheckBox from "../../pages/ranking/SimpleCheckBox";
import DualCheckBox from "../../pages/ranking/DualCheckBox"
const routesData = [
    { name: "Ranking", route: "/ranking", buttons: [<RadioSelect/>,<SimpleCheckBox/>] },
    { name: "Perfil", route: "/perfil", buttons: [<DualCheckBox/>] },
    { name: "Compare", route: "/compare", buttons: [] }
];

export default routesData;