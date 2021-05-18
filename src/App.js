import { Switch, Route, Redirect } from "react-router-dom";

import Header from "./components/Header";
import Gallery from "./pages/Gallery";
import Cart from "./pages/Cart";
import LikedPhotos from './pages/LikedPhotos';
import { config } from './config/general';

import './styles/index.scss';

function App() {
  const { initialPath } = config;
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path={`${initialPath}/gallery`}>
          <Gallery />
        </Route>
        <Route exact path={`${initialPath}/cart`}>
          <Cart />
        </Route>
        <Route exact path={`${initialPath}/liked-images`}>
          <LikedPhotos />
        </Route>
        <Redirect to={`${initialPath}/gallery`} />
      </Switch>
    </div>
  );
}

export default App;
