import ModalAutomoveis from "./components/modalAutomoveis";
import Patio from "./pages/Patio";
import {AiOutlineClose} from "react-icons/ai"
import ConfirmeVenda from "./pages/ConfirmarVenda";


function App() {
  return (

    <>
      {/* <Patio/> */}
       {/* <div className="Modal_automoveis">
       <span className="icon_x"><AiOutlineClose onClick={() =>{console.log("fechar")}}/> </span>
        <ModalAutomoveis id={'vender'} nome={"fiat uno"} preco={"53.60"} onClick />
      </div>  */}

      <ConfirmeVenda/>
      

    </>
  );
}

export default App;
