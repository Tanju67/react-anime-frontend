/* eslint-disable react-refresh/only-export-components */
import { redirect, json } from "react-router-dom";
import Register from "../components/register/Register";

function RegisterPage() {
  return <Register />;
}

export default RegisterPage;

export async function action({ request }) {
  const data = await request.formData();
  const email = data.get("email");
  const name = data.get("name");
  const password = data.get("password");

  const res = await fetch("http://localhost:5000/api/v1/auth/register", {
    method: "POST",
    body: JSON.stringify({ name, email, password }),
    headers: { "Content-Type": "application/json" },
  });
  const resData = await res.json();

  if (!res.ok) {
    throw json(
      { message: resData.msg },
      {
        status: res.status,
      }
    );
  }
  return redirect("/login");
}
