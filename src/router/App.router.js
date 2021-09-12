// MODULES
import { lazy, Suspense } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
// LAZY LOAD SUSPENSE
import Loading from 'suspense/Loading'
// LAYOUT
import Layout from 'layout/Layout'
// PAGES
const Home = lazy(() => import('pages/Home.page'))
const Contact = lazy(() => import('pages/Contact.page'))
const About = lazy(() => import('pages/About.page'))

// RENDER
const App = () => {
    return (
        
            <Router>
                <Layout>
                <Suspense fallback={<Loading />}>
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route path='/about' component={About} />
                            <Route path='/projects'>Projects</Route>
                            <Route path='/contact' component={Contact} />
                            <Route>404</Route>
                        </Switch>
                    </Suspense>
                </Layout>
            </Router>
        
    )
}

export default App