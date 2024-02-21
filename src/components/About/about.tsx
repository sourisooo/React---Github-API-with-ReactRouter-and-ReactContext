import { useContext } from "react";
import { UserContext } from "../ContextProvider/ContextProvider";


function About(){

    const {currentselection, setcurrentselection} = useContext(UserContext);

    console.log(currentselection, currentselection.id);

    const properties = Object.keys(currentselection);

    console.log(properties);

    let test='id';

    return(

        <div style={{color:'white'}}>
        {properties.map((property) => (
          <p key={property}>

            {property}: {JSON.stringify(currentselection[property])}
          </p>
        ))}
      </div>

    // <h1> test </h1>

    )



}


export default About;