import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import List from '../List/List';
import Counter from '../Counter/Counter';
import { useContext, useEffect, useState } from 'react';
import About from '../About/about';
import { UserContext } from '../ContextProvider/ContextProvider';

function App() {

  const {anim, setanim} = useContext(UserContext);

  const {count, setcount} = useContext(UserContext);

  const {page, setpage} = useContext(UserContext);

  const {submitted, setsubmitted} = useContext(UserContext);

  const [search, setsearch] = useState('');



    const previouspage = () => {

        if(page>1) { setpage(page-1), console.log(page), window.scrollTo(0, 0)}

    }

    const nextpage = () => {

        if(count>25*page) { setpage(page+1), console.log(page), window.scrollTo(0, 0)}

    }

    const submit = (e) => {
      
      e.preventDefault();

      setpage(1);

      setsubmitted(search);

      console.log(submitted);

    }



  return (


    <div className="app">
      
      <img src='./logo-github.png' style={{marginLeft:'20vw', padding:'0.75em', width:'25vw', marginTop:'2em'}}></img>



      <form onSubmit={submit}>

      <input type="text" placeholder="Rechercher un anime" value={search} onChange={(e) => setsearch(e.target.value)} style={{marginLeft:'20vw', padding:'0.75em', width:'25vw', marginBottom:'2em'}} />

      </form>

      <Counter count={count} />

      <List animes={anim} />

      {count>25 ? <button onClick={previouspage} style={{marginLeft:'27vw'}}>Page précédente</button> : ''}

      {count>25 ? <button onClick={nextpage}>Page suivante</button> : ''}

    </div>



  );
}

export default App;
