const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const API = {
    BASE: BASE_URL,
    GUESTBOOK: `${BASE_URL}/guestbook`,
    PROJECT: `${BASE_URL}/project`,
    BOARD: `${BASE_URL}/post`,
};

export default API;
