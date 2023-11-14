import styles from "./Layout.module.css";
import Link from "next/link";

const Layout = ({children}) => {
    return (
        <div>
            <header>
                <div>
                    <Link href='/'>
                    <img src="/image/food-logo.png" />
                    </Link>
                </div>
                <div>
                    <Link href="./menu">
                        
                    </Link>
                </div>
            </header>

            <div>{children}</div>

            <footer>
                <h3>Footer</h3>
            </footer>
        </div>
    );
};

export default Layout;