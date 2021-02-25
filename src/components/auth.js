
class Auth {
    constructor() {
      this.authenticated = false;
      this.name='אורח'
    }
  
    login() {
      this.authenticated = true;
    }
  
    logout() {
      this.authenticated = false;
    }
    setProtectPath(cb){
      cb();
    }
  
    isAuthenticated() {
      return this.authenticated;
    }
    setName(n){
      let array=n.split("@")
      this.name=array[0]
    }
    getName(){
      return this.name
    }
  }
  
  export default new Auth();
  