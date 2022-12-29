import './menu.scss'
import MenuItem from '../menuItem/menuItem';

function Menu() {
    return (
      <div className="menu">
        <MenuItem text='Inicio' link='/' />
        <MenuItem text='Notícias' link='/about' />
        <MenuItem text='World of Darkness' link='/wod' />
        <MenuItem text='Dungeons & Dragons' link='/dnd' />
        <MenuItem text='Loja' link='/store' />
      </div>
    );
  }
  
  export default Menu;