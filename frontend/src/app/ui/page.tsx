import Link from 'next/link';

export default function UserInterface() {
    return (
        <ul className="flex flex-col gap-2">
            <li>
                <Link href="/ui/button">Button</Link>
            </li>
            <li>
                <Link href="/ui/loading">Loading</Link>
            </li>
            <li>
                <Link href="/ui/custominput">Input</Link>
            </li>
        </ul>
    );
}
