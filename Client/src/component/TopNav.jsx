
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { MdLocalGroceryStore } from "react-icons/md";
import { useSelector } from 'react-redux';
const TopNav = ()=>{

  const navigate = useNavigate();
   const Product = useSelector(state=>state.mycart.cart);
   const ProLength = Product.length;


    return(
        <>
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link}  to="home">Home</Nav.Link>
            <Nav.Link as={Link}  to="about">About</Nav.Link>
            <Nav.Link  as={Link}  to="registration">Registration</Nav.Link>
          </Nav>
          <div style={{color:"white"}}>
            Store<MdLocalGroceryStore style={{color:"white", fontSize:"30px"}} onClick={()=>{navigate("/cartdata")}}  />
            {ProLength}
            </div>
        </Container>
      </Navbar>
        
        </>
    )
}


export default TopNav;