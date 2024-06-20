import "./perfil.css"
import Card from "../../components/card/Card";
import dataDesc from "../../data/dataDesc";
import './perfil.css'
function profileComponent({children,color,title,dataCards}) {
    
    const cardStyle = {
        backgroundColor: '#FFFFFF',
        borderRadius: '10px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
        boxSizing: 'border-box',
        height: 100,
        width: 170,
        display: 'flex',
        alignItems:'end'
    }
    return (  
    <>
    <div className='title-base-profile' style={{backgroundColor: color}}>
        {title}
    </div>
    <div className="profile-cards">   
    {dataCards.map((item, index) => (
        <Card cardStyle = {cardStyle}>
            <div className="profile-down-card" style={{backgroundColor:color}}>
                {item.label}
            </div>
        </Card>                    
        ))}
        
    </div>
    </>

    );
}

export default profileComponent;