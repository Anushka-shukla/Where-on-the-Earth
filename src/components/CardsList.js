import CountryItem from "./CountryItem";
import "../components/style.css";


const json = require("../assets/worldInfo.json");

function CardsList(props) {
    
    const flatList = json.countryItem;
    
    return (
        <div className="grid-container">

            {flatList.map((countryItem) => (

                // console.log("this is country item", countryItem)
                <CountryItem {...countryItem} key={countryItem.id} />

            ))}

        </div>
    );


}

export default CardsList;
