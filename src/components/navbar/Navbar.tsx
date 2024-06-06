import "./navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="logo" />
        <span>LeeAdmin</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="search" className="icon" />
        <img src="/app.svg" alt="app" className="icon" />
        <img src="/expand.svg" alt="expand" className="icon"/>
        <div className="notification">
          <img src="/notifications.svg" alt="notification" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="https://m.media-amazon.com/images/M/MV5BNTQyNmJkZmYtZTJkZC00N2NkLTk5MTMtNjhlODZlMDk0N2QwXkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_.jpg" alt="profile pic" />
          <span>Bahadoor</span>
        </div>
        <img src="/setting.svg" alt="" className="icon"/>
      </div>
    </div>
  )
}

export default Navbar