
import { ReactComponent as GithubIcon } from 'assets/img/Github.svg';
import './styles.css';

function Navbar() {

    return (
        <header>
            <nav className='container'>
                <div className='dsmovie-nav-content'>
                    <h1>Dsmovie</h1>
                    <a href="https://github.com/devsuperior">
                        <div className='dsmovie-contact-container'>
                            <GithubIcon />
                            <p>/devsuperior</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}
export default Navbar;