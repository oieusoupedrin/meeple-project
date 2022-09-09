import {Link} from 'react-router-dom'

function Menu() {
    return (
      <div className="Menu-item">
        <ul>
            <li><Link to="/">Home</Link> </li>
            <li><Link to="/about">Banner</Link> </li>
        </ul>
      </div>
    );
  }
  
  export default Menu;