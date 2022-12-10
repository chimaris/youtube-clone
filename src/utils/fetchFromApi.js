import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";
// const BASE_URL = "https://www.googleapis.com/youtube/v3";
// const GOOGLE_API_KEY = "AIzaSyAEi379b7Dd6xAt9huDNHcdpuTEqvX4NVE";

const options = {
	url: BASE_URL,
	// params: { maxResults: "50", part: "snippet", key: GOOGLE_API_KEY },
	params: { maxResults: "50", part: "snippet" },

	headers: {
		"X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
		"X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
	},
};

export const fetchFromAPI = async (url) => {
	const { data } = await axios.get(`${BASE_URL}/${url}`, options);
	return data;
};
