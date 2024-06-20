import "./perfil.css"
import Card from "../../components/card/Card";
import dataDesc from "../../data/dataDesc";
import ProfileComponent from "./profileComponent";

function Perfil() {
    const capacidadesCards = dataDesc.filter(item => item.type === 'C');
    const resultadosCards = dataDesc.filter(item => item.type === 'R');
    return (  
        <div style={{display: 'flex',padding: '20px'}}>
            <div className="separator">             
                <ProfileComponent color={'#2F80ED'} title={'Capacidades'} dataCards={capacidadesCards}/>
                <br/>
                <ProfileComponent color={'#3BC3DF'} title={'Resultados'} dataCards={resultadosCards}/> 
            </div>
            <div className="separator">
                <Card/>
            </div>
        </div>
    );
}

export default Perfil;