import {ReactComponent as ReactLogo} from '../logo.svg';
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <div className="navbar">
            <h1 style={{ paddingLeft:'4%', paddingRight:'2%', marginRight:'auto'}}>Auto Parts Supplies</h1>
            <div className="pages" style={{float:'right', paddingRight:'2%'}}> 
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/About'>About</Link>
                        </li>
                        <li>
                            <Link to='/Products'>Products</Link>
                        </li>
                        <li>
                            <Link to='/Contact'>Contact</Link>
                        </li>
                    </ul>
                </nav>

             </div>
        </div>
    )
}

export default Navbar;