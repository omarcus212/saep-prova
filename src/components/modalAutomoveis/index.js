import React from "react";
import CardArea from "../../components/cardArea";


const ModalAutomoveis = ({id,preco,nome, onClick}) => {



    return (
          <div className="modal_info">
             <p> {nome} | preço R$ {preco},00 </p> 
             <input type={"button"} value={'vender'} name={'vender'} onClick={onClick} />
          </div>      
    );



}


export default ModalAutomoveis;