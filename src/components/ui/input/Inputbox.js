import './inputbox.css'
import PropTypes from 'prop-types';

function Inputbox(props) {

    function focus(e) {

        if (!!props.callbackFocus) {
            props.callbackFocus()
        }

    }

    function change(e) {
        if (!!props.callbackChange) {
            props.callbackChange(e)
        }
    }

    return (
        <>
            <input
                className={props.classCss}
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                onChange={change}
                onFocus={focus}
                onClick={props.buttonFunction}
            />
        </>

    )

}

Inputbox.propTypes = {
    type: PropTypes.string,
    callbackChange: PropTypes.func
};

Inputbox.defaultProps = {
    type: 'text',
    placeholder: 'inserisci testo'
}


export default Inputbox