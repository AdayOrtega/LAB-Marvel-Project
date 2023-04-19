import './Header.css'
import Root from '../../Layouts/root'

const Header = ({ title }) => {
    return (
        <div className='header'>
            <h1>{ title }</h1>
        </div>
    )
}

export default Header