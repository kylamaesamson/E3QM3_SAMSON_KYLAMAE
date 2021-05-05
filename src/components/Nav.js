import {Link} from 'react-router-dom'

const Nav = ({user}) => {
    const alertNotice = () => (alert(`Hello  ${user}`))
    return (
        <nav>
        <ul class="nav-links">
        
            <Link to = '/about' className= 'link' > 
            <li>About</li>
            </Link>
            <li className="user" onClick={alertNotice}> 
            User: <span>{user}</span>
           
            </li>
        </ul>
    </nav>
    )
}

export default Nav