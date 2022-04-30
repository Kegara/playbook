const {repo} = require('./repo_model')
const issue = {
    title: "Aprendiendo Nodejs",
    repositoryNameAssociated: repo.name,
    status: 'Open',
    numberOfComments: 77,
    labels: '',
    author: 'Kvothe',
    dateCreated: new Date(),
    lastUpdate: new Date(),
    getTitleAndAuthor: function () {
        console.log(`El autor del issue ${this.title} es ${this.author}`)
    },
    getGeneralInfo: function () {
        console.log(`Title:  ${this.title}\nEstatus: ${this.status}\nRepositorio: ${this.repositoryNameAssociated}`)
    }
}
issue.getTitleAndAuthor()
issue.getGeneralInfo()

exports.issue = issue