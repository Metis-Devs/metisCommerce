import Swal from "sweetalert2";

interface IAlert {
    title: string;
    text: string;
    confirmmsg?: string;
    cancelmsg?: string;
}

export default class AlertService {

    static buttonConfirmColor = "#0B2A3F";
    static buttonCancelColor = "#181B20";

    static success(params: IAlert) {
        Swal.fire({
            customClass: "card-quark",
            title: params.title || "",
            text: params.text || "",
            confirmButtonColor: this.buttonConfirmColor,
            icon: "success",
        });
    }

    static error(params: IAlert) {
        Swal.fire({
            customClass: "card-quark",
            title: params.title || "",
            text: params.text || "",
            confirmButtonColor: this.buttonConfirmColor,
            icon: "error",
        });
    }

    static info(params: IAlert) {
        Swal.fire({
            customClass: "card-quark",
            title: params.title || "",
            text: params.text || "",
            confirmButtonColor: this.buttonConfirmColor,
            icon: "info",
        });
    }

    static confirm(params: IAlert, onConfirm: () => void) {
        Swal.fire({
            customClass: "card-quark",
            title: params.title || "",
            text: params.text || "",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: this.buttonConfirmColor,
            confirmButtonText: "Aceptar",
            cancelButtonColor: this.buttonCancelColor,
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                return onConfirm();
            }
        });
    }

    static confirmWithCancel(
        params: IAlert,
        onConfirm: () => void,
        onCancel: () => void
    ) {
        Swal.fire({
            customClass: "card-quark",
            title: params.title || "",
            text: params.text || "",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: this.buttonConfirmColor,
            confirmButtonText: params.confirmmsg || "Aceptar",
            cancelButtonColor: this.buttonCancelColor,
            cancelButtonText: params.cancelmsg || "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                return onConfirm();
            } else if (result.dismiss) {
                return onCancel();
            }
        });
    }
}