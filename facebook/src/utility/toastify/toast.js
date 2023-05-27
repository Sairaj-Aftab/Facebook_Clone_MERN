import { toast } from "react-toastify";

const createToast = (message, type = "error") => {
  switch (type) {
    case "error":
      return toast.error(message);
    case "success":
      return toast.success(message);
    case "warn":
      return toast.warn(message);
    case "info":
      return toast.info(message);

    default:
      break;
  }
};

export default createToast;
