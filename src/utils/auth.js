import { api } from "../api/index"

class Auth {
  constructor() {
    this.authenticated = false;
    this.role = "";
  }


  async authentication() {
    let token = localStorage.getItem("ACCESS_TOKEN");

    if (!token) {
      this.authenticated = false;
      this.role = "";
    }
    else {
      try {
        let res = await api.get("/api/account/auth/" + token)
        if (res.status === 200) {
          this.authenticated = true;
          this.role = res.data.decoded.role;
        }
      } catch (err) {
        this.authenticated = false;
        this.role = "";
        console.log(err.response)
      }
    }
  }


  login(cb) {
    this.authentication();
    console.log("login", this.authenticated, this.role)
    cb();

  }

  logout(cb) {
    this.authentication();
    console.log("logout", this.authenticated, this.role)
    cb();
  }

  isAuthenticated() {
    this.authentication();
    console.log("authenticated", this.authenticated)
    return this.authenticated;
  }

  isAdmin() {
    this.authentication();
    console.log("admin", this.role === "admin")
    return this.role === "admin";
  }
}

export default new Auth();
