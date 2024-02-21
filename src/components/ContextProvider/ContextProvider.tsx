import { createContext, useEffect } from "react";
import {useContext, useState} from "react";


export const UserContext= createContext({});

export function UserContextProvider({children}){

    const [anim, setanim] = useState<any>([]);

    console.log(anim);
  
    const [count, setcount] = useState(0);
  
    const [page, setpage] = useState(1);
  
    const [submitted, setsubmitted] = useState('');

    const [currentselection, setcurrentselection] = useState({});
  
      // Appel de l'API pour récupérer les données initiales
      useEffect(() => {
        // On ne peut pas faire un useEffect async directement
        // L'astuce est de créer une fonction async et de l'appeler directement
        const fetchData = async () => {
          // J'appel mon API
          // const response = await fetch(`https://api.jikan.moe/v4/anime?q=${search}&sfw`);
          const response = await fetch(`https://api.github.com/search/repositories?q=${submitted}&page=${page}`);
          // Je récupère les données
          const data = await response.json();
          // Je mets à jour mon state avec les données récupérées
          console.log(data.items, data.total_count);
  
          setanim([...data.items]);
  
  
          setcount(data.total_count);
  
          console.log(anim);
  
        };
    
        fetchData();
        
      }, [submitted, page]);


return (


<UserContext.Provider value={{anim,setanim,page,setpage,submitted,setsubmitted, count, setcount, currentselection, setcurrentselection}}>

{children}

</UserContext.Provider>


);



}