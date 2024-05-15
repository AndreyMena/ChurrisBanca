import React from "react";
import axios from "axios";
import AccountBalance from "../AccountBalance/AccountBalance";

const identifyMessage = (messageFromServer) => {
  const handlersMap = {
    // Handlers de la página de perfil de usuario.
    handlerUserInformation: handlerUserInformation(),

    // Handlers de la página de la página bancaria.
    

    // Handlers de la página de la página social.

    
    default: console.log("Handler no encontrado.")
  }

  if(handlersMap[messageFromServer.type]) {
    handlersMap.default;
  }
}

const sendMessageToServer = (messageToServer) => {
  axios.post("/ruta-al-servidor", messageToServer)
    .then(response => {
      identifyMessage(response.data);
    })
    .catch(error => {
      // Maneja los errores si la solicitud falla
      console.error("Error al realizar la conexión o recibir el mensjase del servidor:", error);
    }
  );
}

export default sendMessageToServer;