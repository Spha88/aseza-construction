import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styles from './App.module.scss';

import HeaderContactDetails from './components/HeaderContactDetails/ContactDetails';
import Nav from './components/Nav/Nav';
import MobileNav from './components/MobileNav/MobileNav';
import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
import SingleBlog from './pages/Blog/SingleBlog/SingleBlog';
import AboutPage from './pages/About/About';
import SinglePage from './pages/SinglePage/SinglePage';
import Projects from './pages/Projects/Projects';
import SingleProject from './pages/Projects/SingleProject/SingleProject';
import Footer from './components/Footer/Footer';
import ServicesPage from './pages/Services/Services';
import SingleServicePage from './pages/SingleServicePage/SingleServicePage';

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <header className={styles.Header}>
          <HeaderContactDetails />
          <Nav />
          <MobileNav />
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

            {/** for about page */}
            <Route path="/page/about-page">
              <AboutPage />
            </Route>

            <Route path="/services/:slug">
              <SingleServicePage />
            </Route>

            {/** Route for the ServicesPage */}
            <Route path="/services">
              <ServicesPage />
            </Route>

            {/** For any other page - fallback for page with no template*/}
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
