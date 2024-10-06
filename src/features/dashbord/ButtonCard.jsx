import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ButtonCard() {
  const scrollToAboutUs = () => {
    const aboutSection = document.getElementById("aboutus");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Card
      style={{
        width: "100%",
        maxWidth: "900px",
        margin: "0 auto",
        padding: "20px",
        borderTop: "4px solid blue",
      }}
    >
      <Card.Body className="d-flex flex-column flex-md-row align-items-center justify-content-between">
        <Card.Text
          className="text-primary mb-3 mb-md-0 text-center text-md-start"
          style={{ fontSize: "2rem" }}
        >
          <h1>Join Us in Making a Difference</h1>
        </Card.Text>
        <Button
          variant="primary"
          style={{
            backgroundColor: "blue",
            color: "white",
            border: "none",
            padding: "15px 25px",
            fontSize: "1.25rem",
          }}
          className="ms-md-3"
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#C71585")
          }
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "blue")}
          onClick={scrollToAboutUs}
        >
          SUPPORT NOW
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ButtonCard;
