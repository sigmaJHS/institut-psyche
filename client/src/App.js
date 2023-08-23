import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import routes from './const/routes';

function App() {
  return (
    <BrowserRouter basename="/">
      <Navbar />
      <Routes>
        {
          routes.map(
            function (route, key) {
              return (
                <Route
                  key={key}
                  path={route.path}
                  element={ <route.view /> } />
              );
            }
          )
        }
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
