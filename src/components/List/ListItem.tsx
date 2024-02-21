import { useContext } from 'react';
import { Anime } from '../../@types/anime';
import About from '../About/about';
import { useNavigate  } from 'react-router-dom';
import { UserContext } from '../ContextProvider/ContextProvider';

interface ListItemProps {
  anime: Anime;
}
function ListItem({ anime }: ListItemProps) {

  const navigate = useNavigate();

  const {currentselection, setcurrentselection} = useContext(UserContext);

  const redirectabout = () => {

      console.log(anime);

      setcurrentselection(anime);

    navigate('/about');



  }


  return (
    <div className="card" style={{textAlign:'center'}}>

      <div className='card-body'>

      <h3 className="card-title">{anime.full_name}</h3>
      <img src={anime.owner.avatar_url} />
      <p>{anime.watchers} watchers</p>
      <p className='card-text'>{anime.description}</p>
      <a href="#" className="btn btn-primary" onClick={redirectabout}>About the repositorie</a>

      </div>
 
    </div>
  );
}

export default ListItem;
