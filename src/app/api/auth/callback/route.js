import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const request_token = searchParams.get('request_token');

  const res = await fetch('https://api.themoviedb.org/3/authentication/session/new', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.TMDB_TOKEN}`
    },
    body: JSON.stringify({ request_token })
  });

  const { session_id } = await res.json();
  console.log('session_id:', session_id)

  const cookieStore = await cookies();
  cookieStore.set('tmdb_session', session_id, {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 30
  });

  redirect('/');
}