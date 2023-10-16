import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Name from './Components/Name';
import Price from './Components/Price';
import Description from './Components/Description';
import Image from './Components/Image';

function App() {
  let firstName = 'Saleem Hamis';
  firstName = true ? <Image/> && firstName : false;


  return (
    <div className="App">
      <Card className='border border-primary border-5 border-opacity-50 rounded' style={{ width: '18rem', margin: '50px', padding: '20px' }}>
      <Image />
      <Card.Body>
        <Card.Title><Name/></Card.Title>
        <Card.Text>
          <Description/>
        </Card.Text>
        <Card.Text>
          <Price/>
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>

    <h1 className='m-5'>Hello {firstName}</h1>
    </div>
  );
}

export default App;