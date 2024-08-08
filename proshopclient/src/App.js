import { Container } from 'react-bootstrap';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Header/>
<main class='py-3'>
  <Container>
  <h1> Welcome to pro-shop</h1>
  </Container>
 <Footer/>
</main>
     
    </>
  );
}

export default App;
