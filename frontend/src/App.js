import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import AboutScreen from './screens/AboutScreen';
import { Badge, Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Store } from './Store';
import CartScreen from './screens/CartScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderPlacedScreen from './screens/OrderPlacedScreen';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const { state } = useContext(Store);
  const { cart } = state;

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="d-flex flex-column site-container">
        <header className="mb-3">
          <Navbar bg="dark" variant="dark" fixed="top">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>shopperz</Navbar.Brand>
              </LinkContainer>
              <Nav className="me-auto w-100 justify-content-end">
                <Link to="/cart" className="nav-link">
                  Cart
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </Badge>
                  )}
                </Link>
                <Link className="nav-link mx-3" to="/about">
                  About Us
                </Link>
              </Nav>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className="mt-5">
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/placeorder" element={<PlaceOrderScreen />} />
              <Route path="/order" element={<OrderPlacedScreen />} />
              <Route path="/about" element={<AboutScreen />} />
              <Route path="/product/:slug" element={<ProductScreen />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">All rights reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
