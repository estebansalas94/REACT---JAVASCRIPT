import PropTypes from "prop-types";

export const MuseoApp = ({nombre,direccion,nit}) => {
    return (
        <>
            <h1>{nombre}</h1>
            <p>{direccion}</p>
            <p>{nit}</p>
        </>
    )
}

MuseoApp.propTypes = {
    nombre: PropTypes.string.isRequired,
    direccion: PropTypes.string.isRequired,
    nit: PropTypes.number.isRequired
}