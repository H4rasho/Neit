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
    userTypeForm: "",
  });

  const { email, password, userTypeForm } = values;
  const handleSubmit = (e) => {
    e.preventDefault();
    let userType;

    if (userTypeForm === "admin") {
      userType = userTypeForm;
    } else {
      userType = "estudiante";
    }

    dispatch(startlogin(email, password, userType));
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

              <br></br>
              <div className="form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="userTypeForm"
                  id="flexRadioDefault1"
                  value="estudiante"
                  onChange={handleImputChange}
                  checked
                ></input>
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  &nbsp;Estudiante
                </label>
              </div>
              <div className="form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="userTypeForm"
                  id="flexRadioDefault2"
                  value="admin"
                  onChange={handleImputChange}
                ></input>
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  &nbsp;Administrador
                </label>
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
