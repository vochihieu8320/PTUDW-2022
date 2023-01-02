module.exports = (req, url) => {
  req.session.current_url = url;
}