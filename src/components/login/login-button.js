'use client'

export default function LoginButton() {
    async function handleLogin() {
        const res = await fetch('/api/auth/login');
        const { redirectUrl } = await res.json();
        window.location.href = redirectUrl;
    }

    return <button onClick={handleLogin}>Login with TMDB</button>;
}