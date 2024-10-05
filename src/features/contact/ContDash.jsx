
import imagecont from '../../asset/imagecont.webp';

function TeamDash() {
  

  const backgroundStyle = {
    backgroundImage: `url(${imagecont})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '80vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center',
    padding: '1rem'
  };

  const cardStyle = {
    backgroundColor: 'white',
    padding: '2rem',
    width: '90%',
    maxWidth: '900px', 
    //boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginTop: '-3rem',
    marginBottom: '3rem'
  };

  

  return (
    <div>
      
      <div style={backgroundStyle}>
          
      </div>

      
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={cardStyle}>
          <h1 style={{ color: 'blue', textAlign: 'center', marginBottom: '1rem' }}>Get in Touch<br /><br /></h1>
          
        </div>
      </div>
    </div>
  );
}

export default TeamDash;
