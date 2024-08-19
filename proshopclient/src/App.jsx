import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./components/Products";
import { Productdata } from "./const/Productdata";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <main class="py-3">
        <Container>
          <Outlet/>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
