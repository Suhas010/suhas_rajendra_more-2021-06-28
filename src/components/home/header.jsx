import { useContext } from "react";
import Image from "../../common/Image";
import moon from '../../assets/moon.svg';
import sun from '../../assets/sun.svg';
import ThemeContext from "../../context/theme";

const Header = () => {
  const { dark, toggle } = useContext(ThemeContext);

  return (
    <header className="app-header">
      <h1>Vimeo</h1>
      {dark && (
        <Image
          onClick={toggle}
          src={sun}
          alt="Sun Icon"
          className="theam-icon"
        />
      )}
      {!dark && (
        <Image
          onClick={toggle}
          src={moon}
          alt="Moon Icon"
          className="theam-icon"
        />
      )}
    </header>
  );
}

export default Header