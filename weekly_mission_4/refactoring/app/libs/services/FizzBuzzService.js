class FizzBuzzService {
    static applyValidationInExplorer(explorer){
        if(this.isFizzBuzz(explorer)){
            explorer.trick = "FIZZBUZZ";
            return explorer;
        }else if(this.isBuzz(explorer)){
            explorer.trick = "BUZZ";
            return explorer;
        }else if(this.isFizz(explorer)){
            explorer.trick = "FIZZ";
            return explorer;
        }else{
            explorer.trick = explorer.score;
            return explorer;
        }
    }
    static isFizzBuzz(explorer){
        if(explorer.score%5 === 0 && explorer.score%3 === 0){
            return true;
        }else{
            return false;
        }
    }
    static isBuzz(explorer){
        if(explorer.score%5 === 0){
            return true;
        }else{
            return false;
        }
    }
    static isFizz(explorer){
        if(explorer.score%3 === 0){
            return true;
        }else{
            return false;
        }
    }
}
module.exports = FizzBuzzService;