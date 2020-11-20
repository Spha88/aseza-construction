import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Blog from './pages/Blog/Blog';
import SingleBlog from './pages/Blog/SingleBlog/SingleBlog';
import SinglePage from './pages/SinglePage/SinglePage';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Nav />
        </header>
        <main>
          <Switch>
            <Route path="/blog/:id" >
              <SingleBlog />
            </Route>
            <Route path="/page/:id" exact>
              <SinglePage />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
