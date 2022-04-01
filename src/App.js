import './App.css';
import CardsList from './components/CardsList';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import Heading from './components/Navbar';
// import CountryItem from './components/CountryItem';
// import { useState } from 'react';

function App() {

  // const [query, setQuery] = useState("");

  // // search function
  // const search = (data) => {
  //   return data.filter((countryItem) => countryItem.name.toLowerCase().includes(query) || 
  //   countryItem.capital.toLowerCase().includes(query)
  
  //   );
  // }


  return (
    <div className="App">
      <Heading />
      <SearchBar />
      <CardsList />
      <Footer />


    </div>
  );
}

export default App;
