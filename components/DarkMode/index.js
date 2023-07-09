import { WrapperStyle } from "./styles";

const DarkMode = ({ toggleTheme, colorMode }) => {
  return (
    <WrapperStyle>
      <div className="holder">
        <div className="button" onClick={toggleTheme}>
          {colorMode ? `⚫ Show Normal Mode` : `🌈 Show Color Mode`}
        </div>
      </div>
    </WrapperStyle>
  );
};

export default DarkMode;
