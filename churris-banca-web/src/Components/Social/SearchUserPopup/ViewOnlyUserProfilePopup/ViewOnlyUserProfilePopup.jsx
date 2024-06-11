import React from "react";
import {
	Box,
  Dialog,
  DialogContent,
  DialogTitle,
	TextField,
} from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";

import "./ViewOnlyUserProfilePopup.css";

const ViewOnlyUserProfilePopup = ({ openPopup, handleClosePopup, Nombre, Apellidos, Email, Celular, Imagen}) => {
	return (
		<Dialog open={openPopup} onClose={handleClosePopup}>
			<Box 
          id="view-only-user-profile-img" 
          component="img"
          src={Imagen
            ? Imagen
            : "https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745"
          }
      />
			<DialogTitle align="center">{Nombre} {Apellidos}</DialogTitle>
			<DialogContent>
				<div id="view-only-user-profile-container">
					<div>
						<EmailOutlinedIcon
          		fontSize="large"
          		color="primary"
        		/>
						<TextField
        			disabled={true}
      				value={Email || ''}
        			variant="standard"
      			/>
					</div>
					<div>
						<PhoneAndroidOutlinedIcon
          		fontSize="large"
          		color="primary"
        		/>
						<TextField
        			disabled={true}
      				value={Celular || ''}
        			variant="standard"
      			/>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default ViewOnlyUserProfilePopup;
