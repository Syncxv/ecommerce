import { FormControl, FormLabel, Input, FormHelperText, Button, Box, Flex } from "@chakra-ui/react";
import { ActionFunction, Form, LoaderFunction, Outlet, useLoaderData } from "remix";
import { login } from "../utils/jwt/login.server";
import { getSession } from "../utils/session.server";

interface Props {}

export const loader: LoaderFunction = async ({ request }) => {
    console.log(request);
    let session = await getSession(request.headers.get("Cookie"));
    if (!session.has("token")) return { auth: false };
    return { auth: true };
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
    const { auth } = useLoaderData();
    return (
        <>
            {auth ? (
                <>
                    <div>admin eh</div>
                    <Outlet />
                </>
            ) : (
                <Flex alignItems="center" justifyContent="center" height="100vh">
                    <form method="POST">
                        <FormControl>
                            <FormLabel htmlFor="username">Username</FormLabel>
                            <Input id="username" type="text" name="username" />
                            <FormLabel htmlFor="password">Password</FormLabel>
                            <Input id="password" type="password" name="password" />
                        </FormControl>
                        <Button type="submit">Submit</Button>
                    </form>
                </Flex>
            )}
        </>
    );
};

export default Admin;
