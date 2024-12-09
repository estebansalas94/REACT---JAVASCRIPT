import PropTypes from 'prop-types';


export const FirstApp = ({title,subtitle}) => {

    //console.log(props);
    return (
        <>
            {/* <h1>Esteban salas...</h1> */}
            <h1>{ title }</h1>
            <p>{subtitle}</p>
        </>
        
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number.isRequired
}

FirstApp.defaultProps = {
    title: 'No hay titulo',
    subtitle: 'No hay subtitulo'
}