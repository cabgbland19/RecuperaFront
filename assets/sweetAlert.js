import Swal from "sweetalert2";

export const Sweetalert = {
  /* Alerta basica */
  alert: ({
    icon = "success",
    text = "",
    title,
    confirmButtonColor = "#388E3C",
    timer,
    showConfirmButton = false,
  }) => {
    Swal.fire({
      icon,
      text,
      title,
      confirmButtonColor,
      timer,
      showConfirmButton,
    });
  },
  /* Alerta de confirmacion */
  confirm: () => {
    return Swal.fire({
      title: "Estas seguro?",
      text: "No podras revertir esto!",
      icon: "warning",
      showCancelButton: true,
      reverseButtons: true,
      confirmButtonColor: "#388E3C",
      cancelButtonColor: "#D32F2F",
      cancelButtonText: "No, Cancelar!",
      confirmButtonText: "Si, Eliminar!",
    });
  },
};
