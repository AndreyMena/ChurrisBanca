import axios from "axios";
import handleAccountBalance from "../AccountBalance/AccountBalance";
import handleUserInformation from "../Profile/Profile";

const identifyMessage = (messageFromServer) => {
  const handleMap = {
    // Handle de la página de la página social.


    // Handle de la página de la página bancaria.
    handleAccountBalance: handleAccountBalance(messageFromServer),
    handleTransactions: handleTransactions(messageFromServer),

    // Handle de la página de perfil de usuario.
    handleUserInformation: handleUserInformation(messageFromServer),
    
    default: console.log("Handle no encontrado.")
  }

  if (handleMap[messageFromServer.type]) {
    console.log("Handle encontrado")
  } else {
    console.log("Handle no encontrado")
  }
}

const sendMessageToServer = (messageToServer) => {
  axios.post("/ruta-al-servidor", messageToServer)
    .then(response => {
      identifyMessage(response.data);
    })
    .catch(error => {
      // Maneja los errores si la solicitud falla
      console.error("Error al realizar la conexión o recibir el mensaje del servidor:", error);
    }
  );
}

export default sendMessageToServer;