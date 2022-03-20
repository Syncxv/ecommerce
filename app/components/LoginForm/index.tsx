import { Flex, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

interface Props {}

const LoginForm: React.FC<Props> = (props) => {
    return (
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
    );
};

export default LoginForm;
