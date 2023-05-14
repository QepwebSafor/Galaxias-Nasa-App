import GalaxieCard from './GalaxyCard';
import './GalaxyList.css';
const GalaxieList = ({ galaxies }) => {
  return (
    <div className='GalaxyList'>
      {galaxies.map((galaxy, index) => {
        return (
          <div className='Item' key={index} >
          <GalaxieCard
          galaxy={galaxy} 
        
          />
          </div>
        );
      })}
    </div>
  );
};



export default GalaxieList;