import axios from "axios";

let url = process.env.REACT_APP_API_URL;

const client = (
	endpoint,
	{ data, token, headers: customHeaders, ...customConfig } = {}
) => {
	const config = {
		url: `${url}/${endpoint}`,
		method: data ? "post" : "get",
		data: data ? data : undefined,
		headers: {
			Authorization: token ? `Bearer ${token}` : undefined,
			"Content-Type": data ? "application/json" : undefined,
			...customHeaders,
		},
		responseType: "json",
		...customConfig,
	};

	return axios({ config });
};

export { client };
