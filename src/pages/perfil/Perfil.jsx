import "./perfil.css"
import Card from "../../components/card/Card";
import dataDesc from "../../data/dataDesc";
import ProfileCards from "./ProfileCard";


function Perfil() {
    
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
                <div className='title-base-profile' style={{backgroundColor: '#2F80ED'}}>
                    Capacidades
                </div> 
                <ProfileCards color={'#2F80ED'} title={'Capacidades'} dataCards={capacidadesCards} cardStyle={cardStyle}/>
                <br/> 
                <div className='title-base-profile' style={{backgroundColor: '#3BC3DF'}}>
                    Resultados
                </div>
                <ProfileCards color={'#3BC3DF'} title={'Resultados'} dataCards={resultadosCards} cardStyle={cardStyle}/> 
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
                            Desempenho Indicadores
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default Perfil;