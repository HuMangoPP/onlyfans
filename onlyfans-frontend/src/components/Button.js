import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {

    return (
        <button 
        onClick={onClick} 
        style={{backgroundColor: color}}
        className='btn post-btn'>
        {text}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}
export default Button