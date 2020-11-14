import React, { useEffect } from "react";
import { getCocktailsByID } from "../../js/action/Action";
import { useDispatch,useSelector } from "react-redux";
import Cocktail from "../../components/Cocktail/Cocktail";

function CocktailsDescription(props) {
const cocktail = useSelector(state => state.cocktail)
  const { id } = props.match.params;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCocktailsByID(id));
  }, []);
return <div>{cocktail.strInstructions}</div>;
}

export default CocktailsDescription;
