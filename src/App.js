import './App.css';
import { Layout, Header, Drawer, Navigation, Content } from "react-mdl";
import Main from './components/main';
import { Link } from 'react-router-dom';
import Footer from './components/footer';

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title=" Alex Norton's Portfolio" scroll>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Alex Norton's Portfolio">
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main></Main>
        </Content>
    </Layout>

    <Footer />

   

</div>  


);
}

export default App;
