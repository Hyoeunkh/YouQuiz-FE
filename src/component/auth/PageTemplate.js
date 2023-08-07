import "../../style/PageTemplate.scss";

const PageTemplate = ({children}) => {
    return (
        <>
        <div className="template-wrapper">
            {children}
        </div>
        </>

    );
};

export default PageTemplate;