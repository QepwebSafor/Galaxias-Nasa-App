import { useEffect } from 'react';
import { Col, Spin } from 'antd';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import GalaxyList from './components/GalaxyList';
import { fetchGalaxiesWithDetails } from './slices/dataSlice';
import './App.css';

function App() {
  const galaxies = useSelector((state) => state.data.galaxies, shallowEqual);
console.log(galaxies)
  const loading = useSelector((state) => state.ui.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGalaxiesWithDetails());
  }, [dispatch]);

  return (
    <div className='App'>
            <h2>Descubre todo el universo observable</h2>
      <p className="message">
        Con una sola búsqueda accede a todo el historial y archivos públicos
        recogidos por la NASA
      </p>
          <p>
        Toda el conocimiento del espacio en un solo lugar
      </p>
     
    
      {loading ? (
        <Col offset={12}>
          <Spin spinning size='large' />
        </Col>
      ) : (
        <GalaxyList galaxies={galaxies} />
      )}
    </div>
  );
}

export default App;