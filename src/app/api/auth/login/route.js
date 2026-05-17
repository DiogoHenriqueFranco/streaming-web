
export async function GET() {
  try {
    const res = await fetch('https://api.themoviedb.org/3/authentication/token/new', {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_TOKEN}`
      }
    });

    const data = await res.json();

    const { request_token } = data;
    const redirectUrl = `https://www.themoviedb.org/authenticate/${request_token}?redirect_to=http://localhost:3000/api/auth/callback`;

    return Response.json({ redirectUrl });
  } catch (err) {
    console.error('Login error:', err)
    return Response.json({ error: err.message }, { status: 500 });
  }
}