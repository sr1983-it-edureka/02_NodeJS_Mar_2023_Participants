

const generateCookies = (req, res) => {

  res.cookie("my-param-1", "my-param-1-value");
 
  const threeDaysInMilliSeconds
    = 3 * 24 * 60 * 60 * 1000;
  res.cookie("login-validity", "3 days", {
    maxAge: threeDaysInMilliSeconds
  })

  res.json({
    message: "Server has generated cookies. Refer to Inspect -> Application -> Cookies for more detail"
  });

}

const listCookiesFromBrowser = (req, res) => {

  const cookies = req.cookies;

  res.json({
    cookies
  })

}

module.exports = {generateCookies, listCookiesFromBrowser};