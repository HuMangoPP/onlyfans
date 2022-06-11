import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd}) => {
    const onClick = () => {
        console.log('click')
    }
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Make a new Post'} onClick={onAdd}/>
        </header>
    )
}

// CSS in JS
// const headingStyle = { color: 'orange', backgroundColor: 'black' }

Header.defaultProps = {
    title: "OnlyFans"
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
} 

export default Header