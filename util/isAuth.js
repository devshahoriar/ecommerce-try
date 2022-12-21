const isAuth = ({ req, res }) => {
  const { jwt } = req.cookies
  if (jwt) {
    return true
  } else {
    return false
  }
}

export default isAuth
