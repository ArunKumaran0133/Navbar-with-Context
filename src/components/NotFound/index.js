import Navbar from '../Navbar'
import './index.css'
import ThemeContext from '../../context/ThemeContext'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const notFoundImage =
        'https://assets.ccbp.in/frontend/react-js/not-found-img.png'

      const className = isDarkTheme ? 'dark-mode' : 'light-mode'

      const classNameHeading = isDarkTheme ? 'dark-heading' : 'light-heading'

      const classNamePara = isDarkTheme ? 'dark-para' : 'light-para'

      return (
        <>
          <Navbar />
          <div className={`bg-container ${className}`}>
            <img
              src={notFoundImage}
              alt="not found"
              className="not-found-image"
            />
            <h1 className={classNameHeading}>Lost Your Way?</h1>
            <p className={classNamePara}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
