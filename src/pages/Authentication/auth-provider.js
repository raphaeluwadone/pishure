import { client } from "../../api/client";
const localStorageKey = "_auth_access_token";

async function getToken() {
	return window.localStorage.getItem(localStorage);
}

function handleUserResponse(obj) {
	window.localStorage.setItem(localStorageKey, user.token);
	return obj;
}

function login(data) {
	return client("login", { data }).then(handleUserResponse);
}

function signup(data) {
	return client("register", { data }).then(handleUserResponse);
}

function logout() {
	window.localStorage.reoveItem(localStorageKey);
}

export { getToken, login, signup, logout };
