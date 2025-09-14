const PageContainer = ({ children, title }) => {
    const documentTitle = `Typescript - ${title}`;

    return <div className="h-full p-4 flex flex-col">{children}</div>;
};

export default PageContainer;
