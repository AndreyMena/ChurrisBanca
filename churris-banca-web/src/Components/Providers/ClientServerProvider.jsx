import React from "react";
import axios from "axios";
import { clientServerContext } from "../../context/ClientServerContext";

const ClientServerProvider = ({ children }) => {
	const sendMessageToServer = (messageToServer) => {
		axios.post("/ruta-al-servidor", messageToServer)
			.then(response => {
				return response.data;
			})
			.catch(error => {
				// Maneja los errores si la solicitud falla
				console.error("Error al realizar la conexión o recibir el mensaje del servidor:", error);
			}
		);
	}

	return (
		<clientServerContext.Provider
			value={{
				sendMessageToServer,
			}}
		>
			{ children}
		</clientServerContext.Provider>
	)
}

export default ClientServerProvider;