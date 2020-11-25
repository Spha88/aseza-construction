import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styles from './App.module.scss';
import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
import SingleBlog from './pages/Blog/SingleBlog/SingleBlog';
import SinglePage from './pages/SinglePage/SinglePage';
import Nav from './components/Nav/Nav';
import Projects from './pages/Projects/Projects';
import SingleProject from './pages/Projects/SingleProject/SingleProject';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <header className={styles.Header}>
          <Nav />
        </header>
        <main>
          <Switch>
            <Route path="/blog/:id" >
              <SingleBlog />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/projects/:slug">
              <SingleProject />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/page/:id" exact>
              <SinglePage />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
