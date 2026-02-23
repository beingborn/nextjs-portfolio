import API from '@/constants/api';
import axios from 'axios';
import { GuestbookEntity } from 'types';

/* GET과 달리 POST/PUT/PATCH는 요청 body가 다르고 성공 후 처리 방식이 달라 api에서 분리 : 페이지에서 사용 */
export const createGuestbookEntry = async (data: GuestbookEntity) => {
    try {
        const response = await axios.post<GuestbookEntity>(API.GUESTBOOK, data);
        return response;
    } catch (error) {
        console.log(error);
    }
};
