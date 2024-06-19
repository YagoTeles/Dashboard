import "./perfil.css"
import Card from "../../components/card/Card";
function Perfil() {
    return (  
        <div className="perfil-main">
            <div className="separator1">
                <div className="capacidades-main">
                    <div className="capacidades">
                        Capacidades
                    </div>
                    <div className="capacidades-cards">
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
                    <br/>
                    <div className="capacidades">
                        Resultados
                    </div>
                    <div className="capacidades-cards">
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
                </div>
            </div>
            <div className="separator2">
                <Card/>
            </div>
        </div>
    );
}

export default Perfil;