/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: 'nbarinov',
    },
    plugins: [
        'gatsby-plugin-resolve-src', // делает корнем директорию src
        'gatsby-plugin-react-helmet', // позволяет модифицировать head
        // кэширует локальные ссылки
        // и делает pushState в window.history,
        // чтобы браузеру не приходилост обновться страницу
        'gatsby-plugin-catch-links',
        // указываем, откуда брать страницы md
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/pages`,
                name: 'pages',
            },
        },
        // позволяет трансформировать md в html
        'gatsby-transformer-remark',
    ],
};
