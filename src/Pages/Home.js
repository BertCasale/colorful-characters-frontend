import LogoAndSlogan from "../Assets/ColorfulCharacters.png"

export default function Home() {
  return(<div className="Home " >
    <img src={LogoAndSlogan} alt="Colorful Characters" width="450px"/>
    <h2>A place where anyone of any background can find a character like them in a video game.</h2>
  </div>);
}