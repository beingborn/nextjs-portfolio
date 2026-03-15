export default function BoardDetail({ params }: { params: { id: string } }) {
    const { id } = params;

    return <div>{'디테일 페이지' + id}</div>;
}
