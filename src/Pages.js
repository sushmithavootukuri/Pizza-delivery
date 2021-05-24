import React from "react";
import Register, { RegistrationForm } from "./Register";
import { LoginForm } from "./LoginPage"
import ViewMenu from "./ViewMenu"
import AdminPage from "./AdminPage"

export default function Home() {
  return <h1>Welcome to Pizza Paradise</h1>
}

export function Registration() {
  return <Register></Register>
}

export function UserRegistrationForm() {
  return <RegistrationForm roleType={"user"}></RegistrationForm>
}

export function AdminRegistrationForm() {
  return <RegistrationForm roleType={"admin"}></RegistrationForm>
}

export function Menu() {
  return <ViewMenu />
}

export function Admin() {
  return <AdminPage />
}

export function LoginPage({ setAdmin, setAuthentication }) {
  return <LoginForm setAdmin={setAdmin} setAuthentication={setAuthentication} />
}