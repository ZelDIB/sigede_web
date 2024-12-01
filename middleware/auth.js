export default function ({ route, redirect }) {
  if (process.client) {
    const token = localStorage.getItem("token");

    if (!token && route.path !== "/") {
      return redirect("/");
    }

    if (token && route.path === "/") {
      return redirect("/admins/screens/CapturistList");
    }
  }
}
