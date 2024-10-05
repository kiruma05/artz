
import imagetem from '../../asset/trac.jpg';

function TeamDash() {
  

  const backgroundStyle = {
    backgroundImage: `url(${imagetem})`,
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
          <h1 style={{ color: 'blue', textAlign: 'center', marginBottom: '1rem' }}>Types of Members<br /><br /></h1>
          <p className='fs-5' style={{ lineHeight: '2.2' }}>
          There shall be two types of members<br />
         <strong>Founder members: </strong> These are members who made the initiatives to establish this Organization;<br />
          <strong>Ordinary members: </strong> These are members who join the Organization after its establishment;<br />
            <br /><br />
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default TeamDash;
