import "./perfil.css"
import Card from "../../components/card/Card";
import dataDesc from "../../data/dataDesc";
import ProfileCards from "./ProfileCard";
import {Radar} from '../../components/RadarChart/Radar'
import { data } from '../../components/RadarChart/data';
import dataTest from '../../data/dataTest'
import { useGroups } from '../../contexts/GroupsContext';
import React, { useEffect,useState} from 'react';

function Perfil() {
    
    const capacidadesCards = dataDesc.filter(item => item.type === 'C');
    const resultadosCards = dataDesc.filter(item => item.type === 'R');
    const indicesCards = dataDesc.filter(item => item.type === 'I');
    const [dataReturn, setDataReturn] = useState([]);
    const data2 = [
        { speed: 0.01, acceleration: 9.5, conso: 1.4, safety: 0.1, style: 90, price: 7, name: "mercedes" },
        { speed: 4.9, acceleration: 3.0, conso: 9.4, safety: 0.2, style: 590, price: 76, name: "peugeot" },
        { speed: 2.7, acceleration: 1.2, conso: 1.3, safety: 0.9, style: 990, price: 96, name: "honda" },
      ]
    const {groups} = useGroups();
    const titles = []
    let datateste = []

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
    useEffect(() => {
        
        datateste = []
      {dataDesc.map((item, index) => (
        datateste.push({value:maxValueObj(item.value),label:item.label})
      ))} 
      const tmp = datateste.reduce((acc, current) => {
        acc[current.label] = current.value;
        return acc;
    }, {})
    setDataReturn([tmp])
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