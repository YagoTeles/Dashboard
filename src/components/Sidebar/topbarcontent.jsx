import RankingButton1 from "../../pages/ranking/RadioSelect";
import RankingButton2 from "../../pages/ranking/SimpleCheckBox";
const routesData = [
    { name: "Ranking", route: "/ranking", buttons: [<RankingButton2/>,<RankingButton1/>] },
    { name: "Perfil", route: "/perfil", buttons: [] },
    { name: "Compare", route: "/compare", buttons: [] }
];

export default routesData;