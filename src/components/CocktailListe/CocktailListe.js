import React, { useEffect } from "react";
import { getCocktails } from "../../js/action/Action";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import Cocktail from "../Cocktail/Cocktail";
import './CocktailListe.css'

function CocktailListe({item}) {
  const dispatch = useDispatch();
  const cocktails = useSelector((state) => state.cocktails);
  const cocktailsLoad = useSelector((state) => state.cocktailsLoad);
  console.log(cocktails);

  useEffect(() => {
    dispatch(getCocktails(item));
  }, [item]);

  return (
    <div className="liste">
      {cocktailsLoad ? (
        <CircularProgress color="secondary" />
      ) : cocktails==null?<p>not found</p>:(
        cocktails.map((el) => <Cocktail cocktails={el}/>)
      )}
    </div>
  );
}

export default CocktailListe;
