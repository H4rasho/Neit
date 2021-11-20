import React from "react";
import './styles/Login.css';

export const Login = () => {
  return (
    <div>
      
      <div class="modal-dialog text-center">
          <div class="col-sm-8 main-section">
            <div class="modal-content user-img">

                <div class="col-12 mt-4"><img src="./Logoutem-1.png"></img></div>

                <form class="col-12 mt-4 mb-4">

                  <div class="form-group mb-3" id="user-group">
                    <input type="text" id="user" class="form-control" placeholder="Email"></input>
                  </div>
                  
                  <div class="form-group" id="contrasena-group">
                    <input type="password" id="password" class="form-control" placeholder="Contrasena"></input>
                  </div>

                  <button type="submit" class="btn btn-success mt-4"><i class="fas fa-sign-in-alt"></i>  Ingresar </button>

                </form>
                
                <div class="col-12 mb-4 forgot"><a href="#">¿Has olvidado tu contraseña?</a></div>

            </div>
          </div>
      </div>

      <div class="modal-dialog text center">
        <div class="col-sm-8 main-section2">
          <p><b>Estimado estudiante:</b> Recuerde que sus credenciales de acceso son de carácter personal, confidencial e intransferible. </p>  
        </div>  
      </div>

    </div>
  );
};
