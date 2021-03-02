
class Auth {
    constructor() {
      this.authenticated = false;
      this.name='אורח'
      this.path=''
    }
  
    login() {
      this.authenticated = true;
    }
  
    logout() {
      this.authenticated = false;
    }
    async setProtectPath(cb,p){
       this.path= await p
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
    getPath(){
      return this.path
    }
  }
  
  export default new Auth();
  