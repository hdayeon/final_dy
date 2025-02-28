import React, { ReactNode } from "react";
import Header from "../Header/Header";
// import Footer from "../Footer/Footer";
import PropTypes from 'prop-types';
import { AuthProvider } from "../../context/AuthContext";

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <AuthProvider>
            <Header />
            {children}
            {/* <Footer /> */}
        </AuthProvider>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;