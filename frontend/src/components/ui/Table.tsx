/* 
    1. Table 
    
*/

import { useRouter } from 'next/navigation';

const Header = ({ column, children }) => {
    return (
        <th className="h-10 border border-gray-300 border-collapse text-left px-2 bg-sky-100">
            {column && column.label}
            {children}
        </th>
    );
};

const Cell = ({ children }) => {
    return <td className="h-10 border border-gray-300 px-2 bg-white">{children}</td>;
};

const Table = ({ columns, label, data }) => {
    const router = useRouter();

    return (
        <table className="w-full table-fixed">
            <caption className="sr-only">{label}</caption>
            <colgroup>
                {columns.map((column) => (
                    <col
                        key={column.id}
                        style={{
                            width: column.width,
                        }}
                    />
                ))}
            </colgroup>
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
