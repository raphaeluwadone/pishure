import React from "react";
import { Redirect } from "react-router";
import { useAuth } from "../context/AuthContext";

const useRedirectUser = () => {
	const { user } = useAuth();
	if (user) return <Redirect to='/' />;
};

export default useRedirectUser;
