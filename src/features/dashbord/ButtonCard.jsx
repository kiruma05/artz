import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ButtonCard() {
  const scrollToAboutUs = () => {
    const aboutSection = document.getElementById('aboutus');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Card style={{ width: '80%', margin: '0 auto', padding: '-1', borderTop: '4px solid blue' }}>
      <Card.Body className="d-flex align-items-center justify-content-between">
        <Card.Text className="text-primary fs-1 mb-0">
          <h1>Join Us in Making a Difference</h1>
        </Card.Text>
        <Button
          variant="primary"
          style={{
            backgroundColor: 'blue',
            color: 'white',
            border: 'none',
            padding: '25px 35px',
            fontSize: '1.5rem',
          }}
          className="ms-3"
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#C71585')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'blue')}
          onClick={scrollToAboutUs} // Scroll to About Us section
        >
          SUPPORT NOW
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ButtonCard;
