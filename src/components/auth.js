
class Auth {
    constructor() {
      this.authenticated = false;
      this.name='אורח';
      this.path='';
      this.role='';
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
    setPath(p){
      this.path=p
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
    setRole(r){
      this.role=r
    }
    getRole(){
      return this.role
    }
  }
  
  export default new Auth();
  