// MODULES

// COMPONENTS
import Navbar from './Navbar'
import Footer from './Footer'
import Page from './Page'
// RENDER
const Layout = ({children}) => {
    return (
        <>
            <Navbar />
            <Page>{children}</Page>
            <Footer />
        </>
    )
}

export default Layout