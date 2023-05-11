import GalaxieCard from './GalaxyCard';

const GalaxieList = ({ galaxies }) => {
  return (
    <div className='GalaxyList'>
      {galaxies.map((galaxy) => {
        return (
          <GalaxieCard
          galaxy={galaxy} 
           
          />
        );
      })}
    </div>
  );
};

GalaxieList.defaultProps = {
  galaxys: Array(10).fill(''),
};

export default GalaxieList;