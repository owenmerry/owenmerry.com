import {
  DarkMode,
  TitleText,
  Menu,
  Technologies,
  Timeline,
} from "../components/";
import { useState } from "react";

export default function Home() {
  const [stateMenu, setStateMenu] = useState("tech");
  const [colorMode, setColorMode] = useState(false);
  const themeColor = {
    color: "#fbfe1e",
    colorBackground: "#622cd9",
    colorBorder: "#fbfe1e",
    font: "Merriweather",
  };
  const themeBlackAndWhite = {
    color: "black",
    colorBackground: "white",
    colorBorder: "black",
    font: "Roboto",
  };
  const theme = () => (colorMode ? themeColor : themeBlackAndWhite);

  const menuShow = (type) => {
    setStateMenu(type);
  };

  return (
    <div>
      <style jsx global>
        {`
          html,
          body,
          textarea {
            font-family: "Roboto", sans-serif;
            /* font-family: ${theme().font}, sans-serif; */
            margin: 0px;
            padding: 0px;
            color: ${theme().color};
            background-color: ${theme().colorBackground};
          }
          a {
            text-decoration: none;
          }
          .website-holder {
            max-width: 960px;
            margin: 10px auto;
            padding: 0px 10px;
          }
        `}
      </style>
      <div className="website-holder">
        <DarkMode
          toggleTheme={() => {
            setColorMode(!colorMode);
            console.log("changed theme", colorMode);
          }}
          colorMode={colorMode}
        />
        <TitleText theme={theme()} />
        <Menu menuShow={menuShow} theme={theme()} />

        {stateMenu === "tech" && <Technologies theme={theme()} />}

        {stateMenu === "timeline" && <Timeline theme={theme()} />}
      </div>
    </div>
  );
}
