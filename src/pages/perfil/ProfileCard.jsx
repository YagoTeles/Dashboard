import "./perfil.css"
import Card from "../../components/card/Card";
import dataTest from '../../data/dataTest'
import './perfil.css'
import { useGroups } from '../../contexts/GroupsContext';

function ProfileCards({color,dataCards,cardStyle,type = 1}) {
    const fontSize = 10
    const { groups } = useGroups();
    const styleWidth = type === 1 ? '80%' : '100%';
    const justifyC = type === 1 ? 'flex-start' : 'center';
   
    const maxValueObj = (option) => {
        const checkedIds = [];
        const dataObject = dataTest[option]
        let ret = 0
        groups.forEach(region => {
            region.children.forEach(child => {
                if (child.checked) {
                    checkedIds.push(child.id);
                }
            });
        });
        const filteredData = dataObject.filter(item => checkedIds.includes(item.label));
        if (filteredData.length > 0 ){
            ret = filteredData.reduce((max, obj) => obj.value > max.value ? obj : max, filteredData[0]).value
        }
        else{
            ret = 0
        }
        
        return ret
    }

    const retColor = (index) => {
        const colorByIndex = ['#00408D','#2F80ED','#3BC3DF']
        if (type === 1){
            return color
        }
        else{
            if (index > 2 ) index = 2
            return colorByIndex[index]
        }
    }
    return (  
    <>
    <div className="profile-cards" style={{width:styleWidth,justifyContent:justifyC}}> 
    {dataCards.map((item, index) => (
        <Card cardStyle = {cardStyle}>
            <div style={{display:'flex',height:'64%',width:'100%'}}>
                <div className="profile-center-card" >
                    <div style={{fontSize:fontSize}}>
                        2022 {/*Posteriomente deve vim a informacao pela API*/}
                    </div>
                </div>
                <div className="profile-center-card" style={{backgroundColor:'#F4F6FF',borderRadius:7}}>
                    <div style={{fontSize:fontSize,marginBottom:10}}>
                        Valor
                    </div> 
                    <div style={{color:'#060E3F',fontWeight:'bold'}}>
                        {maxValueObj(item.value)}
                    </div>      
                </div>
            </div>
            <div className="profile-down-card" style={{backgroundColor:retColor(index)}}>
                {item.label}
            </div>
        </Card>                    
        ))} 
    </div>
    </>

    );
}

export default ProfileCards;