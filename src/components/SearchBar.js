import './style.css';

function SearchBar() {
    return (
        <div className="search-box">
            <button type="submit" className="search-btn"><i className="fa fa-search"></i></button>
            <input type="text" placeholder="Search" />


        </div>
    );

}

export default SearchBar;
