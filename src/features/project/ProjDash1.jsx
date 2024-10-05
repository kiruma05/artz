
import imagepro from '../../asset/imagepro.jpg';

function ProjDash1() {
  

  const backgroundStyle = {
    backgroundImage: `url(${imagepro})`,
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
        <div>
          
        </div>
      </div>

      
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={cardStyle}>
          <h1 style={{ color: 'blue', textAlign: 'center', marginBottom: '1rem' }}>Road Accident Combustion Projects<br /><br /></h1>
          <p style={{ lineHeight: '2.2' }}>
          Tanzania aim to improve road safety through education, data analysis, and public awareness. These initiatives provide tools for accident prevention, real-time reporting, and interactive learning. By educating the public, analyzing accident data, and offering accessible safety resources, the projects seek to reduce road accidents, enhance public knowledge, and support government efforts in creating safer roads for everyone.
            <br />
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default ProjDash1;
