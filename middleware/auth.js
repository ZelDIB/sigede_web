export default function ({ store, redirect, route }) {
  if (!store.state.authenticated) {
    return redirect("login");
  }

  const userRole = store.state.user.role
  const adminRoutes = ['/admin']

  if (adminRoutes.includes(route.path) && userRole !== 'admin') {
    return redirect('/unauthorized')
  }
}
