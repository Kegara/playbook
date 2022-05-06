class explorerService{
    static filterByCertification(explorers, certificationStatus=true){
        return explorers.filter((explorers) => explorers.haveCertification == certificationStatus);
    }
    static getEmailsOfCertifiedExplorers(explorers){
        return this.filterByCertification(explorers).map((explorer) => explorer.email);
    }
    static  getExplorersWithCreditsGreaterThan(explorers, credits=0){
        return  explorers.filter((explorer) => explorer.credits > credits);
    }
}
module.exports = explorerService;