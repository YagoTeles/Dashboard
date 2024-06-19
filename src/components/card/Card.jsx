
function Card({ children, height=100, width=130}) {
    const cardStyle = {
        backgroundColor: '#FFFFFF',
        borderRadius: '10px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
        height: height,
        width: width,
        padding: '20px',
        boxSizing: 'border-box'

    };

    return (  
        <div style={cardStyle}>
            {children}
        </div>
    );
}

export default Card;