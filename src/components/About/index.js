import Navbar from '../Navbar'
import './index.css'
import ThemeContext from '../../context/ThemeContext'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const aboutImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
      const className = isDarkTheme ? 'dark-mode' : 'light-mode'

      const heading = isDarkTheme ? 'dark-heading' : 'light-heading'
      return (
        <>
          <Navbar />
          <div className={`bg-container ${className}`}>
            <img src={aboutImage} alt="about" className="about-image" />
            <h1 className={heading}>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
