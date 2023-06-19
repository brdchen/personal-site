import { FunctionComponent } from 'react';

const NavBar: FunctionComponent = () => {
    return (
        <nav>
            <a href='/'>
                Home
            </a>
            <a href='/'>
                About Me
            </a>
            <a href='/'>
                Projects
            </a>
            <a href='/'>
                Gallery
            </a>
        </nav>
    );
};

export default NavBar;