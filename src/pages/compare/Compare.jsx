import Card from "../../components/card/Card";
import dataDesc from "../../data/dataDesc";
import ProfileCards from "../perfil/ProfileCard";

function Compare() {
    const capacidadesCards = dataDesc.filter(item => item.type === 'C');
    const resultadosCards = dataDesc.filter(item => item.type === 'R');
    const indicesCards = dataDesc.filter(item => item.type === 'I');
    const cardStyle = {
        backgroundColor: '#FFFFFF',
        borderRadius: '10px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
        boxSizing: 'border-box',
        height: 100,
        width: 170,
        display: 'flex',
        justifyContent:'flex-end',
        flexDirection:'column',
    }
    return (  
        <div style={{display: 'flex',padding: '20px'}}>
            <div className="separator">   
                
            </div>
            <div className="separator">
            <Card
                width={650}
                height={650}
                >
                    <div className="box-regiao">
                        <div style={{color:'#1A428A',fontWeight:'bold',fontSize:'21px'}}>
                            Nordeste
                        </div>
                        <div className="region-summary"> 
                            <ProfileCards dataCards={indicesCards} cardStyle={cardStyle} type={2}/>                 
                        </div>
                        <div style={{color:'#1A428A',fontWeight:'bold',fontSize:'21px'}}>
                            Sul
                        </div>
                        <div className="region-summary"> 
                            <ProfileCards dataCards={indicesCards} cardStyle={cardStyle} type={2}/>                 
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default Compare;