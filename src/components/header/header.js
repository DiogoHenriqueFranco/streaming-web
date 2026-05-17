import { cookies } from 'next/headers';
import LoginButton from '../login/login-button';
import './header.css';
import Link from "next/link";

export function Header({ sessionId }) {
    return (
        <header>
            <div className="header-wrapper">
                <Link href='/'><h1>LOGO</h1></Link>
                <input type="text" placeholder='Search...' />
                {sessionId ? 
                <>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Movies</li>
                        <li>TV Shows</li>
                    </ul>
                </nav>
                </>
                :<LoginButton />}
            </div>
        </header>
    );
}