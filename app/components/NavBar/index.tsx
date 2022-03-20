import { Flex, Box, Text, Grid } from "@chakra-ui/react";
import { Link, useLocation } from "remix";
import { List, ShoppingBag } from "phosphor-react";
import Logo from "../atoms/Logo";
interface Props {}

const NavItem: React.FC<{ name: string; icon: any; to: string }> = ({ name, icon, to }) => {
    const location = useLocation();
    const selected = location.pathname.split("/").at(-1) === to;
    const border = selected ? { borderLeft: "4px solid", borderColor: "black" } : {};
    return (
        <Grid gridTemplateColumns="auto auto" padding={selected ? "0 2rem" : "0 calc(2rem + 4px)"} {...border} width="100%" as={Link} to={to}>
            {icon}
            <Text>{name}</Text>
        </Grid>
    );
};

const NavBar: React.FC<Props> = ({ children }) => {
    return (
        <Flex width="100%" height="100%">
            <Flex
                direction="column"
                justifyContent="space-between"
                borderRight="1px solid"
                borderColor="blackAlpha.300"
                width="32vmin"
                as="nav"
                height="100vh"
            >
                <div className="hi">
                    <Grid my={25} gridTemplateColumns="auto auto" padding="0 1rem" width="100%">
                        <Logo />
                    </Grid>
                    <Flex gap={4} direction="column" justifyContent="center" width="100%">
                        <NavItem to="dashboard" name="Dashboard" icon={<List size={32} />} />
                        <NavItem to="hehe" name="TESTING" icon={<ShoppingBag size={32} />} />
                    </Flex>
                </div>
                <Box className="USER">bruh 2</Box>
            </Flex>
            {children}
        </Flex>
    );
};

export default NavBar;
