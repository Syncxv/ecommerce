import { Links, LinksFunction, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "remix";
import type { MetaFunction } from "remix";
import { ChakraProvider } from "@chakra-ui/react";

export const meta: MetaFunction = () => {
    return { title: "New Remix App" };
};

// export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];
export default function App() {
    return (
        <Document>
            <ChakraProvider>
                <Layout>
                    <Outlet />
                </Layout>
            </ChakraProvider>
        </Document>
    );
}

export const Document: React.FC = ({ children }) => {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <title>Hi</title>
                <Meta />
                <Links />
            </head>
            <body>
                {children}
                {/* <ScrollRestoration />
                <Scripts /> */}
                {process.env.NODE_ENV === "development" && <LiveReload />}
            </body>
        </html>
    );
};

export const Layout: React.FC = ({ children }) => {
    return <> {children} </>;
};
