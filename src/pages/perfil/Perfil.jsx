import "./perfil.css"
import Card from "../../components/card/Card";
import dataDesc from "../../data/dataDesc";
import ProfileCards from "./ProfileCard";
import {Radar} from '../../components/RadarChart/Radar'
import dataTest from '../../data/dataTest'
import { useGroups } from '../../contexts/GroupsContext';
import React, { useEffect,useState} from 'react';

function Perfil() {
    
    const capacidadesCards = dataDesc.filter(item => item.type === 'C');
    const resultadosCards = dataDesc.filter(item => item.type === 'R');
    const indicesCards = dataDesc.filter(item => item.type === 'I');
    const [dataReturn, setDataReturn] = useState([]);

    const {groups} = useGroups();
    const titles = []
    let dataMaxValue = []
    let dataAvgValue = []
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

      const averageValueObj = (option) => {
        const checkedIds = [];
        const dataObject = dataTest[option];
        let sum = 0;
        let count = 0;
    
        groups.forEach(region => {
            region.children.forEach(child => {
                if (child.checked) {
                    checkedIds.push(child.id);
                }
            });
        });
    
        const filteredData = dataObject.filter(item => checkedIds.includes(item.label));
        
        if (filteredData.length > 0) {
            filteredData.forEach(obj => {
                sum += obj.value;
                count++;
            });
            return sum / count;
        } else {
            return 0;
        }
    }

    useEffect(() => {
        
      dataMaxValue = []
      dataAvgValue = []
      {dataDesc.map((item, index) => (
        dataMaxValue.push({value:maxValueObj(item.value),label:item.label,name:'#6689c6'})
      ))} 
      let maxValue = dataMaxValue.reduce((acc, current) => {
        acc[current.label] = current.value;
        return acc;
    }, {})
    {dataDesc.map((item, index) => (
        dataAvgValue.push({value:averageValueObj(item.value),label:item.label,name:'#623423'})
      ))} 
      let avgValue = dataAvgValue.reduce((acc, current) => {
        acc[current.label] = current.value;
        return acc;
    }, {})
 
    setDataReturn([maxValue,avgValue])
    }, [groups]);

    {dataDesc.map((item, index) => (
        titles.push({name: item.label, max: 1})
      ))} 
      
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
                        <Radar
                            data={dataReturn}
                            width={800}
                            height={300}
                            axisConfig={titles}
                        />
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default Perfil;