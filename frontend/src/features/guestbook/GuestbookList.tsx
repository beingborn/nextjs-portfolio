import { GuestbookEntity } from 'types';

interface GuestbookList {
    guestbooklist: GuestbookEntity[];
}

export default function GuestbookList({ guestbooklist }: GuestbookList) {
    return (
        <ul className="grid grid-cols-4 gap-4">
            {guestbooklist?.map((guest) => (
                <li
                    className="shadow-md p-4 aspect-video"
                    style={{ backgroundColor: guest.color }}
                    key={guest.id}
                >
                    <p className="text-text-sub">{guest.author}</p>
                    <strong className="text-lg">{guest.title}</strong>
                    <p>{guest.text}</p>
                </li>
            ))}
        </ul>
    );
}
