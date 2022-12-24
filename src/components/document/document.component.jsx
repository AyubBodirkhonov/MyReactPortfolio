import "./document.styles.scss";
import { documents } from "../../assets/documentation/document";
import Button from "../UI/button.component";
const Document = () => {
  return (
    <div className="about-introduction">
      {documents.map((doc) => (
        <div className="doc-items" key={doc.id}>
          <h2>About</h2>
          <p>{doc.introduction}</p>
          <p>Hi, I'm Ayub Bodirkhonov a Frontend Developer</p>
        </div>
      ))}
      <div className="button-container">
        <Button>Explore more</Button>
      </div>
    </div>
  );
};

export default Document;
