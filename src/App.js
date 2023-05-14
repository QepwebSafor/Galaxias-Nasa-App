import { useEffect } from "react";
import { Col, Spin } from "antd";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import GalaxyList from "./components/GalaxyList";
import { fetchGalaxiesWithDetails } from "./slices/dataSlice";


function App() {
  const galaxies = useSelector((state) => state.data.galaxies, shallowEqual);

  const loading = useSelector((state) => state.ui.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGalaxiesWithDetails());
  }, [dispatch]);

  return (
    <div className="wrapper">
      <h2>Galaxias</h2>
      <h3>Descubre todo el universo observable</h3>

      <p>
        Toda el conocimiento del espacio de archivos públicos recogidos por la
        NASA, en un solo lugar
      </p>

      {loading ? (
        <Col offset={12}>
          <Spin spinning size="large" />
        </Col>
      ) : (
        <GalaxyList galaxies={galaxies} />
      )}
    </div>
  );
}

export default App;
