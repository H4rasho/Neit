import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Swal from "sweetalert2";
import { startGetAsignaturasAdmin } from "../../actions/asignaturas";
import {
  adminActiveAsignatura,
  adminCrearOfertaAcademica,
  adminOfertaAcademicaSetAsignatura,
  adminOfertaAcademicaSetCarrera,
  adminOfertaAcademicaSetFacultad,
} from "../../actions/facultad";
import { disValidos } from "../../helpers/validarCapos";
import { useForm } from "../../hooks/useForm";
import "./styles/Oferta.css";
import moment from "moment";
import "moment/locale/es";
moment.locale("es");

export const Tabla = () => {
  const {
    option,
    asignaturas,
    checkingAsignaturas,
    activeAsignatura,
    ofertaAcademica,
  } = useSelector((state) => state.admin);

  const [values, handleInputChange, rest, restHorario] = useForm({
    docente: "",
    dia: "",
    horaInicio: "",
    horaFin: "",
    cupos: "",
  });

  const { docente, dia, horaInicio, horaFin, cupos } = values;
  const [horarios, setHorarios] = useState([]);
  const [secciones, setSecciones] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startGetAsignaturasAdmin(option));
    if (option && option.modo === "facultad") {
      dispatch(adminOfertaAcademicaSetFacultad(option.id));
    } else if (option && option.modo === "carrera") {
      dispatch(adminOfertaAcademicaSetCarrera(option.id));
    }
  }, [dispatch, option]);

  if (!option) {
    return <Redirect to="/admin"></Redirect>;
  }

  const handleAgregarAsignatura = (asig) => {
    dispatch(adminActiveAsignatura(asig));
  };

  const handleGuardarHorario = (e) => {
    e.preventDefault();

    if (!disValidos.has(dia.toLowerCase())) {
      return Swal.fire("Error", "El día ingresado no está permitido", "error");
    } else if (
      !(
        moment(horaFin, "hh:mm").isValid() &&
        moment(horaInicio, "hh:mm").isValid()
      )
    ) {
      return Swal.fire(
        "Error",
        "Las horas ingresadas no cuplen el formato",
        "error"
      );
    }
    if (horaFin < horaInicio) {
      return Swal.fire(
        "Error",
        "hora fin debe ser mayor a hora inicio",
        "error"
      );
    }
    if (
      horarios.find(
        (h) =>
          h.dia === dia.toLowerCase() &&
          h.horaInicio === horaInicio &&
          h.horaFin === horaFin
      )
    ) {
      return Swal.fire("Error", "Ya éxiste el horario ingresado", "error");
    }

    setHorarios([...horarios, { dia: dia.toLowerCase(), horaInicio, horaFin }]);
    restHorario();
  };

  if (checkingAsignaturas) {
    return <h1>Cargando</h1>;
  }

  const onSubmitSeccion = (e) => {
    e.preventDefault();
    if (!cupos) {
      return Swal.fire("Los Cupos", "Son requeridos", "error");
    }

    const newSeccion = {
      docente,
      horarios,
      cuposMax: cupos,
    };
    setSecciones([...secciones, newSeccion]);
    setHorarios([]);
    rest();
  };

  const handleFinalizar = (e) => {
    e.preventDefault();
    const newAsignautura = {
      id: activeAsignatura.id,
      secciones,
    };
    console.log(newAsignautura);
    dispatch(adminOfertaAcademicaSetAsignatura(newAsignautura));
    setSecciones([]);
    Swal.fire({
      title: "Asignatura agregada",
      text: "Has agregado una asignatura a la oferta",
      icon: "success",
      showConfirmButton: false,
      timer: 2000,
    });
  };

  const handleCerrar = (e) => {
    e.preventDefault();
    setHorarios([]);
    setSecciones([]);
  };

  const handleOfertaAcademica = () => {
    adminCrearOfertaAcademica(ofertaAcademica);
  };

  return (
    <div className="bg-light">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">N°</th>
            <th scope="col">Nombre</th>
            <th scope="col">Estado</th>
          </tr>
        </thead>
        <tbody>
          {asignaturas ? (
            asignaturas.map((asig, key) => (
              <tr key={asig.id}>
                <th scope="row">{key}</th>
                <td>{asig.nombre}</td>
                <td>
                  {/*Modal para agregar detalles de la asignatura*/}
                  {asig.ready ? (
                    <button type="button" className="btn btn-primary" disabled>
                      Añadido
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={() => handleAgregarAsignatura(asig)}
                    >
                      Agregar
                    </button>
                  )}
                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            Registrar asignatura
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          {/*Formulario para datos de la asignatura*/}
                          <form>
                            <div className="mb-3">
                              <label
                                htmlFor="exampleInputEmail1"
                                className="form-label"
                              >
                                Docente
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="docente"
                                value={docente}
                                name="docente"
                                onChange={handleInputChange}
                              ></input>
                            </div>

                            <div className="mb-3">
                              <label
                                htmlFor="exampleInputPassword1"
                                className="form-label"
                              >
                                Horarios
                              </label>
                              {horarios.length > 0 ? (
                                horarios.map((h, key) => (
                                  <p
                                    key={key}
                                  >{`${h.dia} - ${h.horaInicio} - ${h.horaFin}`}</p>
                                ))
                              ) : (
                                <p>Sin horarios</p>
                              )}
                              <input
                                type="text"
                                className="form-control"
                                id="dia"
                                placeholder="Dia"
                                value={dia}
                                name="dia"
                                onChange={handleInputChange}
                              ></input>
                              <input
                                type="text"
                                className="form-control"
                                id="horainicio"
                                placeholder="Hora de inicio"
                                value={horaInicio}
                                name="horaInicio"
                                onChange={handleInputChange}
                              ></input>
                              <input
                                type="text"
                                className="form-control"
                                id="horafinal"
                                placeholder="Hora de salida"
                                value={horaFin}
                                name="horaFin"
                                onChange={handleInputChange}
                              ></input>
                              <button
                                className="btn btn-success m-1"
                                onClick={handleGuardarHorario}
                              >
                                Añadir Horario
                              </button>
                            </div>

                            <div className="mb-3">
                              <label
                                htmlFor="exampleInputEmail1"
                                className="form-label"
                              >
                                Cupos
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="cupos"
                                value={cupos}
                                name="cupos"
                                onChange={handleInputChange}
                              ></input>
                            </div>
                          </form>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-danger"
                            data-bs-dismiss="modal"
                            onClick={handleCerrar}
                          >
                            Cerrar
                          </button>
                          <button
                            type="button"
                            className="btn btn-success"
                            onClick={onSubmitSeccion}
                          >
                            Añadir Seccion
                          </button>
                          <button
                            className="btn btn-danger m-1"
                            onClick={handleFinalizar}
                          >
                            Finalizar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <h1>No hay asignaturas</h1>
          )}
        </tbody>
      </table>
      <button onClick={handleOfertaAcademica} className="m-1 btn btn-primary">
        Crear Oferta Académica
      </button>
    </div>
  );
};
