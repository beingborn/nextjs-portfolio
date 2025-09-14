'use client';

import { PageTitle, Table } from './components/common';

const columns = [
    { id: 'name', label: 'Name' },
    { id: 'age', label: 'Username' },
    { id: 'email', label: 'email' },
];

const data = [
    { name: 'John', age: 30, email: 'USA@gmail.com' },
    { name: 'Alice', age: 25, email: 'Canada@naver.com' },
    { name: 'Bob', age: 35, email: 'UK@naver.com' },
];

export default function Home() {
    return (
        <div>
            <PageTitle title="홈" />
            <Table columns={columns} data={data} label="First Table" />
        </div>
    );
}
