import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { startlogin } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";
import "./styles/Login.css";

export const Login = ({ history }) => {
  const dispatch = useDispatch();

  const [values, handleImputChange] = useForm({
    email: "",
    password: "",
  });

  const { email, password } = values;
  const handleSubmit = (e) => {
    console.log(email);
    e.preventDefault();
    dispatch(startlogin(email, password));
    history.replace("/");
  };

  return (
    <div>
      <div className="modal-dialog text-center">
        <div className="col-sm-8 main-section">
          <div className="modal-content user-img">
            <div className="col-12 mt-4">
              <img src="./Logoutem-1.png" alt="utem"></img>
            </div>

            <form className="col-12 mt-4 mb-4" onSubmit={handleSubmit}>
              <div className="form-group mb-3" id="user-group">
                <input
                  type="text"
                  id="user"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={handleImputChange}
                ></input>
              </div>

              <div className="form-group" id="contrasena-group">
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="Contrasena"
                  name="password"
                  value={password}
                  onChange={handleImputChange}
                ></input>
              </div>

              <button type="submit" className="btn btn-success mt-4">
                <i className="fas fa-sign-in-alt"></i> Ingresar{" "}
              </button>
            </form>

            <div className="col-12 mb-4 forgot">
              <Link to="#">¿Has olvidado tu contraseña?</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="modal-dialog text center">
        <div className="col-sm-8 main-section2">
          <p>
            <b>Estimado estudiante:</b> Recuerde que sus credenciales de acceso
            son de carácter personal, confidencial e intransferible.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
