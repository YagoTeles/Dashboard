import React from 'react';
import './tableCompare.css';

const Tabela = ({ data ,title}) => {
    return (
        <table className="styled-table">
            <thead>
                <tr>
                    <th>Dimensão de {title}</th>
                    <th colspan="2">{title}</th>
                </tr>
                <tr>
                    <th>Indicador</th>
                    <th>Sul</th>
                    <th>Nordeste</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                        <td style={{textAlign:'start'}}>{row.indicador}</td>
                        <td style={{textAlign:'center'}}>{row.sul.toFixed(3)}</td>
                        <td style={{textAlign:'center'}}>{row.nordeste.toFixed(3)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Tabela;
