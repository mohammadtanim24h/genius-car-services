import { Helmet } from "react-helmet-async";

const titleHelmet = (title) => {
    return (
        <Helmet>
            <title>{title}</title>
        </Helmet>
    );
}

export default titleHelmet;