import { Children, FunctionComponent } from "react";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import Help from "./Help.tsx";
import {useTheme} from "react-daisyui";

type LayoutProps = {
    className?: string,
    children: string | JSX.Element | (string | JSX.Element)[];
}

const Layout: FunctionComponent<LayoutProps> = ({className, children}) => {

    return <div className="relative focus:outline-none min-h-screen flex flex-col">
        <Header/>
        <main className={`w-full max-w-7xl mx-auto p-4 sm:p-3 md:p-5 flex-1 ${className ? className : ''}`}>
            {Children.map(children, child =>
                <>{child}</>
            )}
        </main>
        <Footer/>
        <Help/>
    </div>
};

export default Layout;