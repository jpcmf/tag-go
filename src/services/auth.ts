const strapiUrl = process.env.STRAPI_URL;

export async function signIn({ email, password }) {
  const response = await fetch(`${strapiUrl}/api/auth/local`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ identifier: email, password }),
  });
  return response.json();
}
