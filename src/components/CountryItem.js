import Card from "./ui/Card";
import "../components/style.css";

function CountryItem(props) {
    return (
       
        <Card>
            <div className="card-container">
                <img src={props.image} alt={props.name} />
                <h2 className="card-title">{props.name}</h2>
                <small className="unicode">Unicode: {props.unicode}</small>
                <h3 className="population">Population: {props.population}</h3>
                <h3 className="capital">Capital: {props.capital}</h3>
                <div className="row">
                    <button className="btn-edit">Edit</button>
                    <button className="btn-delete">Delete</button>
                </div>
            </div>
        </Card>
       
    );
}

export default CountryItem;
