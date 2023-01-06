import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
    return (
        <header className='main-header'>
            <h1 className='webpage-name'>{title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: "OnlyFans"
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
} 

export default Header