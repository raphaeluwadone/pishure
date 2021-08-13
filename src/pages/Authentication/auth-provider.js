import { client } from "../../api/client";

const localStorageKey = "_auth_user";

function getToken() {
	return window.localStorage.getItem(localStorageKey).token;
}

function getUser() {
	return window.localStorage.getItem(localStorageKey).user;
}

function handleUserResponse(obj) {
	// window.localStorage.setItem(localStorageKey, user.token);
	// return obj;
	console.log(obj);
}

function login(data) {
	return client("login", { data }).then(handleUserResponse);
}

function signup(data) {
	return client("register", { data });
}

function logout() {
	window.localStorage.reoveItem(localStorageKey);
}

export { getToken, login, signup, logout };
