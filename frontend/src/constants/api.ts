const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const API = {
    BASE: BASE_URL,
    GUESTBOOK: `${BASE_URL}/guestbook`,
    BOARD: `${BASE_URL}/board`,
};

export default API;
