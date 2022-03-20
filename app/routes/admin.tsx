import { FormControl, FormLabel, Input, FormHelperText, Button, Box, Flex } from "@chakra-ui/react";
import { ActionFunction, Form, LoaderFunction, Outlet, useLoaderData } from "remix";
import LoginForm from "../components/LoginForm";
import NavBar from "../components/NavBar";
import { login } from "../utils/jwt/login.server";
import { getSession } from "../utils/session.server";

interface Props {}

export const loader: LoaderFunction = async ({ request }) => {
    console.log(request);
    let session = await getSession(request.headers.get("Cookie"));
    if (!session.has("token")) return { auth: true };
    return { auth: true, admin: session.get("admin") };
};

export const action: ActionFunction = async ({ request }) => {
    const form = await request.formData();
    const username = form.get("username");
    const password = form.get("password");
    if (!username) return { errors: [{ message: "username aint there" }] };
    if (!password) return { errors: [{ message: "password aint there aint there" }] };
    return await login({ request, username: username.toString(), password: password.toString() });
};

const Admin: React.FC<Props> = (props) => {
    const { auth, admin } = useLoaderData();
    console.log(auth, admin);
    return (
        <>
            {auth ? (
                <NavBar>
                    <Outlet />
                </NavBar>
            ) : (
                <LoginForm />
            )}
        </>
    );
};

export default Admin;
