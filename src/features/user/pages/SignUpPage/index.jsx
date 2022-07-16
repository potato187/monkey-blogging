import { auth, database } from "@/firebase/config";
import { useMounted } from "@/hooks";
import { toastify } from "@/utils";
import { yupResolver } from "@hookform/resolvers/yup";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Layout } from "../Layouts";
import FormSignUp from "./FormSignUp";

const index = () => {
	const schema = Yup.object().shape({
		fullName: Yup.string().min(4, "Must be least 4 characters").required("Please fill out your name"),
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
			fullName: "",
			email: "",
			password: "",
		},
		resolver: yupResolver(schema),
		mode: "onChange",
	});

	const registerUser = async (auth, email, password) => {
		return await createUserWithEmailAndPassword(auth, email, password);
	};

	const profile = async (auth, profile) => {
		return await updateProfile(auth.currentUser, profile);
	};

	const addUser = async (colRef, profile) => {
		return await addDoc(colRef, profile);
	};

	const onSubmit = async ({ fullName, email, password }) => {
		try {
			await registerUser(auth, email, password);
			await profile(auth, { displayName: fullName });
			const colRef = collection(database, "users");
			await addUser(colRef, { name: fullName, email, password });
			toastify("Register successfully");
			navigate("/");
		} catch (error) {
			console.log(error);
		}
	};

	const updateTitle = () => {
		document.title = "Sign Up";
	};

	useMounted(updateTitle, []);

	return (
		<Layout heading='Sign Up Page'>
			<FormSignUp onSubmit={handleSubmit(onSubmit)} control={control} isSubmitting={isSubmitting} />
		</Layout>
	);
};

export default index;
