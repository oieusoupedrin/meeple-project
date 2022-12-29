import './menuItem.scss'
import { Link } from 'react-router-dom'
function MenuItem({text, link}) {
    return (
        <button className='menu-item'>
            <Link to={link}>{text}</Link>
        </button>
    )
}
export default MenuItem

