import PropTypes from "prop-types";
import './button.css';

function Button(props){

    function click(e) {
        if (!!props.callbackClick) {
          props.callbackClick(e);
        }
    }

    return(
        <div 
            className={props.buttonClassCss} 
            onClick={click}
        >
            
            {!!props.iconBtn && (
                <a href="#" className={props.classBtn}>
                    <i className={props.iconBtn}></i>
                    Facebook
                </a>
            )}

            {!!props.imageBtn && (
                <a href="" className={props.classBtn}>
                    <img src={`${props.imageBtn}`} 
                        alt={''} 
                        className='imageButtonGoogle'
                    />
                    Google
                </a>
            )}

            {!!props.label && (
                    <section>{props.label}</section>
                )
            }
            
        </div>
    );
}

Button.propTypes = {
    label: PropTypes.string,
    callbackClick: PropTypes.func.isRequired,
};

export default Button;