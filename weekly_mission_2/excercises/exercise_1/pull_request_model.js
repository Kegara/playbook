const {user} = require('./author_model')
const {repo} = require('./repo_model')
console.log(user)
console.log(repo)
const pullrequest ={
    name: "Aprendiendo Nodejs",
    branchName: "master",
    datecreated: new Date(),
    status: 'Open',
    repositoryNameAssociated: repo.name,
    getStatus: function(){
        return this.status
    },
    getTitleAndAuthor: function(){
        return `El usuario del pullrequest "${this.name}"  para ${repo.name} en la rama ${this.branchName} es ${user.user}`
    }
}
//status
console.log("El estado del pullrequest es: " + pullrequest.getStatus())

console.log(pullrequest.getTitleAndAuthor())
