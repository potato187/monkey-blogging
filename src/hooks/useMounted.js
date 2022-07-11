import React, { useEffect, useRef } from "react";
import { ref } from "yup";

const useMounted = (callback, deps) => {
	const mounted = useRef(true);
	useEffect(() => {
		if (!mounted.ref) {
			callback();
		}
		mounted.ref = false;
	}, deps);
};

export default useMounted;
