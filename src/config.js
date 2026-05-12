export const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzY3ZDlhNzRhNDQ1ODRjOTRkMGIzNTIwOGEzNDliZSIsIm5iZiI6MTQ5MDgyODMyMS4wNDMsInN1YiI6IjU4ZGMzYzFkOTI1MTQxMjcxMzAwNDdjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4JfQoJhTibU0gvUHLAZFfyK2MKSPvKxAgUfgDUNX4HA"
export   const url = 'https://api.themoviedb.org/3/authentication';
export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${token}`
    }
  };