import RadioSelect from "../../pages/ranking/RadioSelect";
import SimpleCheckBox from "../../pages/ranking/SimpleCheckBox";
import DualCheckBox from "../../pages/perfil/DualCheckBox"
const title1 = 'Selecione a primeira região'
const title2 = 'Selecione a segunda região'
const routesData = [
    { name: "Ranking", route: "/ranking", buttons: [<RadioSelect/>,<SimpleCheckBox/>] },
    { name: "Perfil", route: "/perfil", buttons: [<DualCheckBox/>] },
    { name: "Compare", route: "/compare", buttons: [<DualCheckBox buttondesc = {title1}/>,<DualCheckBox buttondesc = {title2} color="secondary" context={2}/>] }
];

export default routesData;