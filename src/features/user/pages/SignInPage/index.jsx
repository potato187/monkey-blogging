import { useAuth } from "@/contexts/auth-context";
import { auth } from "@/firebase/config";
import { useMounted } from "@/hooks";
import { toastify, getMessageFromErrorCode } from "@/utils";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Layout } from "../Layouts";
import FormSignIn from "./FormSignIn";

const index = () => {
	const { user, setUser } = useAuth();

	const schema = Yup.object().shape({
		email: Yup.string().email("Email is invalid").required("Please fill out your email"),
		password: Yup.string()
			.matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, "Password is not strong enough")
			.required("Please fill out your password"),
	});

	const navigate = useNavigate();

	const {
		handleSubmit,
		control,
		formState: { isValid, isSubmitting },
	} = useForm({
		defaultValues: {
			email: "",
			password: "",
		},
		resolver: yupResolver(schema),
		mode: "onChange",
	});

	const onSubmit = async ({ email, password }) => {
		try {
			const user = await signInWithEmailAndPassword(auth, email, password);
			setUser(user);
		} catch (error) {
			toastify(getMessageFromErrorCode(error?.code), "error");
		}
	};

	const updateTitle = () => {
		document.title = "Sign In";
		signOut(auth);
	};

	useMounted(updateTitle, []);

	return (
		<Layout heading='Sign In Page'>
			<FormSignIn onSubmit={handleSubmit(onSubmit)} control={control} isSubmitting={isSubmitting} />
		</Layout>
	);
};

export default index;
