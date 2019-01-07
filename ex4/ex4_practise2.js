var User = {
    init: function(email, password) {
        this.email = email;
        this.password = password;
        console.log('User created email: ' + this.email);
    },
    login: function (status) {
        if (!status)
            console.log('User login success: ' + this.email);
    }
}
var Admin = Object.create(User);
Admin.initAdmin = function (email, password) {
    this.init(email, password);
    this.status = status;
    console.log('Admin access assigned to: ' + this.email);
};
Admin.adminLogin = function () {
    this.login("ADMIN");
    console.log('Admin login success: ' + this.email);
}
var testUser = Object.create(User);
testUser.init('test', 'test');
testUser.login();

var testAdmin = Object.create(Admin);
testAdmin.initAdmin('admin', 'admin', 1);
testAdmin.adminLogin();