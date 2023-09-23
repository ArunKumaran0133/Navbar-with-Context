import {Link} from 'react-router-dom'
import './index.css'
import ThemeContext from '../../context/ThemeContext'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onChangTheme = () => {
        toggleTheme()
      }

      const logoImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
      const themeImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const navItemClassName = isDarkTheme
        ? 'light-theme-nav-items'
        : 'dark-theme-nav-items'

      const themeClassName = isDarkTheme ? 'dark-theme' : 'light-theme'
      return (
        <nav className={`nav-bg-container ${themeClassName}`}>
          <div>
            <Link to="/">
              <img src={logoImage} alt="website logo" className="logo-image" />
            </Link>
          </div>
          <ul className="nav-list-container">
            <li>
              <Link to="/" className={navItemClassName}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={navItemClassName}>
                About
              </Link>
            </li>
          </ul>
          <button
            type="button"
            onClick={onChangTheme}
            className="button"
            data-testid="theme"
          >
            <img src={themeImage} alt="theme" className="theme-image" />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
