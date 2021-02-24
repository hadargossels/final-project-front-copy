
class Auth {
    constructor() {
      this.authenticated = false;
      this.name='אורח'
    }
  
    login(cb) {
      this.authenticated = true;
      cb();
    }
  
    logout(cb) {
      this.authenticated = false;
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
  