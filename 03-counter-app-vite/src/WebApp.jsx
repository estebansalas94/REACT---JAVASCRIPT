import PropTypes from "prop-types";

export const WebApp = ({title,descripcion,estado,url}) => {
    return (
        <>
            <h1>{title}</h1>
            <p>{descripcion}</p>
            <p>{estado}</p>
            <a href={url} target="blank">React.com</a>
        </>
    );
}

WebApp.propTypes = {
    title: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    estado: PropTypes.bool.isRequired,
    url: PropTypes.string.isRequired
}