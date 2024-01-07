import { Fragment, FunctionComponent } from "react";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";

type LayoutProps = {
    children: string | JSX.Element | JSX.Element[]
}
const Layout: FunctionComponent<LayoutProps> = ({children}) => (
    <Fragment>
        <Header />
        <main className="min-h-[75vh]">
            {children}
        </main>
        <Footer />
    </Fragment>
);

export default Layout;