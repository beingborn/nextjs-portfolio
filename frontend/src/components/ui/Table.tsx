/* 제네릭 타입 : 타입 Placeholder => 외부에서 타입 지정 */
export type Column<T> = {
    key: keyof T;
    header: string;
    width?: string | number;
    align?: 'center' | 'left' | 'right';
    render?: (row: T) => React.ReactNode;
    order?: boolean;
};

type TableProps<T> = {
    data: T[];
    columns: Column<T>[];
};

export default function Table<T extends object>({ columns, data }: TableProps<T>) {
    return (
        <table>
            <thead>
                <tr>
                    {columns.map((column) => (
                        <th
                            className="px-4 h-10 text-lg border border-border-primary-300 bg-tablehead-primary font-bold text-text-main"
                            style={{
                                width: column.width,
                            }}
                            key={String(column.key)}
                        >
                            {column.header}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {/* 데이터 순회 */}
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {/* 열의 render 속성이 있을 경우 render에  */}
                        {columns.map((column) => (
                            <td
                                className="px-4 text-md h-9 border border-border-primary-300"
                                style={{ textAlign: column.align || 'center' }}
                                key={String(column.key)}
                            >
                                {column.order
                                    ? rowIndex + 1
                                    : column.render
                                      ? column.render(row)
                                      : String(row[column.key])}
                            </td>
                        ))}
                    </tr>
                ))}

                {data.length == 0 && (
                    <tr>
                        <td
                            className="px-4 text-md h-9 border border-border-primary-300 text-center"
                            colSpan={columns.length}
                        >
                            데이터가 없습니다.
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}
