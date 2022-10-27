export default function ({ $api, redirect, store, route }) {
  const token = store.state.localStorage.token;

  if (token === null) {
    $api.setHeader(false);
    redirect({
      name: "index",
    });
  } else {
    const rol = store.state.localStorage.username.rol;
    const nameRoute = route.name.split("-")[0];

    if (nameRoute === "admin") {
      if (rol !== "ADMINISTRADOR") {
        redirect({ name: "index" });
      }
    }
    if (nameRoute === "management" || nameRoute === "managementForm") {
      if (rol.split(" ")[0] !== "BACKOFFICE") {
        redirect({ name: "index" });
      }
    }

    $api.setHeader("Authorization", "Token " + token);
  }
}
