import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(
		() => window.localStorage.getItem("credentials")?.user || null
	);

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	);
};

const useAuth = () => {
	let value = useContext(AuthContext);
	if (!value) throw new Error("useAuth is not within a context");
	return value;
};

export { AuthProvider, useAuth };
