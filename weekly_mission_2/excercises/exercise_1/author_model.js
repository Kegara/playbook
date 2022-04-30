const user = {
    user: "@user",
    name: "User",
    lastName: "LastName",
    getFullName: function(){
        return `${this.name} ${this.lastName}`
    }

}
console.log(user.getFullName())

exports.user = user