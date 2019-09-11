import React from 'react';
import { string } from 'prop-types';

import Helmet from 'react-helmet';
import Header from 'components/Header';

import { TITLE, DESCRIPTION, KEYWORDS } from 'constants/meta';

import './Layout.css';

const Layout = ({ title, children }) => {
    return (
        <div className="Layout">
            <Helmet
                title={title || TITLE}
                meta={[
                    { name: 'description', content: DESCRIPTION },
                    { name: 'keywords', content: KEYWORDS },
                ]} />

            <Header />
            {children}
        </div>
    );
};

Layout.propTypes = {
    title: string, // название страницы
};

export default Layout;