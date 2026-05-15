import './header.css';

export function Header() {
    return (
        <header>
            <div className="header-wrapper">
                <h1>LOGO</h1>
                <input type="text" placeholder='Search...' />
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Movies</li>
                        <li>TV Shows</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}