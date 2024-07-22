import V_imagen from "./assets/images/image.png";
import Proptypes from "prop-types";
import Button from "./components/Button";
import WelcomeText from "./components/WelcomeText";
import ItemFrut from "./components/fruts/ItemFrut";
import ListFruts from "./components/fruts/ListFruts";
import ButtonState from "./components/ButtonState";

Button.propTypes = {
  text: Proptypes.string.isRequired,
};

ItemFrut.propTypes = {
  frut: Proptypes.string.isRequired,
};

const App = () => {
  const title = "Titulo desde una constante";
  const classTitle = "text-center";
  const user = true;

  const fruts = ["🍎", "🍌", "🍐"];
  const frutsTwo = ['🍊' , '🍉' , '🍍']



  return (
    <>

      <ButtonState/>

      <h1 className={classTitle}>{title}</h1>
      <img className="image-size" src={V_imagen} alt={`imagen-${title}`} />

      <Button text="boton 1" />
      <Button text="boton 2" />
      <Button text="boton 3" />

      <WelcomeText user={user} />

      <ListFruts fruts = {fruts}/>
      <ListFruts fruts = {frutsTwo}/>
      
    </>
  );
};

export default App;
