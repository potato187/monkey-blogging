import { toast } from "react-toastify";

const toastify = (message = "", status = "success", options = {}) => {
	toast[status](message, { autoClose: 1000, pauseOnHover: false, ...options });
};

export default toastify;
