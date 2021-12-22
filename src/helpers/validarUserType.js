export const validarUserType = (userType, uid) => {
  console.log(userType);
  if (!uid) {
    return {
      loggedEstudiante: false,
      loggedAdmin: false,
    };
  } else if (userType === "estudiante") {
    return {
      loggedEstudiante: true,
      loggedAdmin: false,
    };
  } else if (userType === "admin") {
    return {
      loggedEstudiante: false,
      loggedAdmin: true,
    };
  } else {
    return {
      loggedEstudiante: false,
      loggedAdmin: false,
    };
  }
};
