import { Switch, Route, Redirect } from "react-router-dom";

import Header from "./components/Header";
import Gallery from "./pages/Gallery";
import Cart from "./pages/Cart";
import LikedPhotos from './pages/LikedPhotos';

import './styles/index.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/gallery">
          <Gallery />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/liked-images">
          <LikedPhotos />
        </Route>
        <Redirect to='/gallery' />
      </Switch>
    </div>
  );
}

export default App;
