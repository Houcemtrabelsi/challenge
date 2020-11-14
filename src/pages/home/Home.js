import React,{useState} from "react";
import Search from '../../components/search/Search'
import CocktailListe from '../../components/CocktailListe/CocktailListe'

function Home() {
const [item, setItem] = useState('')
  const getSearch =(newvalue)=>{
setItem(newvalue)
  }
  return (
    <div>
      <Search getSearch={getSearch}/>
      <CocktailListe item={item}/>
    </div>
  );
}

export default Home;
