
import imagenew from '../../asset/imagenew.webp';

function TeamDash() {
  

  const backgroundStyle = {
    backgroundImage: `url(${imagenew})`,
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
          <h1 style={{ color: 'blue', textAlign: 'center', marginBottom: '1rem' }}>Latest Videos & Photos<br /><br /></h1>
          <p style={{ lineHeight: '2.2' }}>
          Welcome to our collection of the latest videos and photos showcasing our work in promoting road safety and accident prevention in Tanzania. Explore our multimedia gallery to witness our efforts in creating awareness and educating the public on the importance of safe road practices.
            <br /><br />
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default TeamDash;
