import Navbar from '../Navbar'
import './index.css'
import ThemeContext from '../../context/ThemeContext'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const homeImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      const className = isDarkTheme ? 'dark-mode' : 'light-mode'

      const heading = isDarkTheme ? 'dark-heading' : 'light-heading'
      return (
        <>
          <Navbar />
          <div className={`bg-container ${className}`}>
            <img src={homeImage} alt="home" className="home-image" />
            <h1 className={heading}>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
