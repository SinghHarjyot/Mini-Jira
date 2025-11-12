const Auth = {
  login(username, password) {
    if (username && password) {
      localStorage.setItem('user', username);
      return true;
    }
    alert("Invalid login!");
    return false;
  },
  logout() {
    localStorage.removeItem('user');
  },
  getUser() {
    return localStorage.getItem('user');
  }
};
export default Auth;
