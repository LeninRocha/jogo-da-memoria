import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './Header.module.scss'
function Header() {
  return (
    <>
      <Navbar >
        <Container>
          <Navbar.Brand href="/" className={styles.logo}></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/" className={styles.color}>Início</Nav.Link>
            <Nav.Link href="/sobre" className={styles.color}>Sobre</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;