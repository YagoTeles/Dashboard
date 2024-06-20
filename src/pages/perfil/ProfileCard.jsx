import "./perfil.css"
import Card from "../../components/card/Card";
import dataDesc from "../../data/dataDesc";
import './perfil.css'
function ProfileCards({color,dataCards,title,cardStyle}) {
    
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

export default ProfileCards;