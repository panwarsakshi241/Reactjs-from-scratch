import reactImg from '../../../src/assets/react-core-concepts.png';
import "./Header.css";
import { genRandomInt, reactDescription } from "./Header.util";

function Header() {
    const reactDisc = reactDescription[genRandomInt(2)]
    return (
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {reactDisc} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    );
  }

export default Header;