export default function ({ store, redirect }) {
  const isAuth = store.getters.isAuth
  // If the user is not authenticated
  if (!isAuth) {
    const REDIRECT_URL = '/login'
    return redirect(REDIRECT_URL)
  }
}