import React from 'react';
import './App.css';
// import of other js files,navigation bar , container and rout
import {Header} from './components/header';
import {Footer} from './components/footer';
import { Content } from './components/content';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


class App extends React.Component {

  render(){
  return (
    // Wrap
    <Router>
    <div className="App">

      {/* Navigation bar and clickable links to bring you to other pages  */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/read">Read</Nav.Link>
            <Nav.Link href="/create">Create</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* switch between urls */}
      <Routes>
        <Route path='/' element={<Content></Content>}></Route>
        <Route path='/read' element={<Header></Header>}></Route>
        <Route path='/create' element={<Footer></Footer>}></Route>
      </Routes>

      {/* <Header></Header>
      <Content/>
      <Footer></Footer> */}
    </div>
    </Router>
  );
  }
}

export default App;
