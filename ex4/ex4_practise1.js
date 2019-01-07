function User(email, password) {
    this.email = email;
    this.password = password;
    console.log('User created email: '+this.email);
}
User.prototype.login = function(status){
    if(!status)
        console.log('User login success: '+this.email);
}
function Admin(email, password, status) {
    User.call(this, email, password);
    this.status = status;
    console.log('Admin access assigned to: '+email);
}
Admin.prototype.login = function () {
    User.prototype.login("ADMIN");
    console.log('Admin login success: '+this.email);
}
var testUser = new User('test','test');
testUser.login();
var testAdmin = new Admin('admin', 'admin', 1);
testAdmin.login();