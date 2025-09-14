'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

type Column = {
    id: string;
    label: string;
    isLink?: boolean;
    href?: string;
};

type HeaderProps = {
    column?: Column;
    children?: React.ReactNode;
};

type CellProps = {
    children: React.ReactNode;
};

const Header = ({ column, children }: HeaderProps) => {
    return (
        <th className="h-10 border border-gray-300 border-collapse text-left px-2 bg-sky-100">
            {column && column.label}
            {children}
        </th>
    );
};

const Cell = ({ children }: CellProps) => {
    return <td className="h-10 border border-gray-300 px-2 bg-white">{children}</td>;
};

// Record <Key, Value>
// 키가 Key타입이고 값이 Value 타입인 객체 타입을 생성함
interface TableProps {
    columns: Column[]; // Column 타입의 객체들을 가지는 배열롰써 선언
    data: Record<string, any>[];
    label: string;
}

const Table = ({ columns, label, data }: TableProps) => {
    const router = useRouter();

    return (
        <table className="w-full table-fixed">
            <caption className="sr-only">{label}</caption>
            <thead>
                <tr>
                    {columns.map((column) => (
                        <Table.Header key={column.id} column={column} />
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                        {columns.map((column) => (
                            <td
                                key={column.id}
                                className={`h-10 border border-gray-300 px-2 bg-white ${column.isLink && ' cursor-pointer hover:underline'}`}
                                onClick={() => {
                                    if (column.isLink) {
                                        router.push(`/pages/${column.href}/${row.id}`);
                                    }
                                }}
                            >
                                {row[column.id]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

Table.Header = Header;

export { Cell as TableCell, Header as TableHead };
export default Table;
