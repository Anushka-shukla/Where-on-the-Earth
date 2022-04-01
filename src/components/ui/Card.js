import "./card.css";

function Card(props){
    return (
        <div className="card">
            {props.children}
        </div>
    );

}

export default Card;

// we will inject MeeupItem component in this component using props.children