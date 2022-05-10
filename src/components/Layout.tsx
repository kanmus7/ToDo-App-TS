import Header from '../views/Header'
import Footer from '../views/Footer'
import '../styles/layout.css'

type Props = {
  children:JSX.Element | JSX.Element[]
}

const Layout  = ({children}: Props) => {
  return (
    <main className='Main'>
    <Header/>
    {children}
    <Footer />
    </main>
  )
}

export default Layout