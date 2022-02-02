export default function ({ redirect, $cookies }) {
  const token = $cookies.get('token')
  // If the user is not authenticated
  if (!token) {
    const REDIRECT_URL = '/login'
    return redirect(REDIRECT_URL)
  }
}
