import Card from "../../components/card/Card";
import dataDesc from "../../data/dataDesc";
import ProfileCards from "../perfil/ProfileCard";
import TableCompare from './TableCompare';
import data from './compareDataTest'
function Compare() {
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
            <div className="separator" style={{display: 'flex',flexDirection:'column',alignItems:'center',justifyContent:'center', height:'600px'}}>   
                <TableCompare data={data} title={'Capacidades'}/>
                <TableCompare data={data} title={'Resultados'}/>   
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