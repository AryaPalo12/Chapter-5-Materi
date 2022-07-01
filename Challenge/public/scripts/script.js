class WinnerCheck {
    //this codes add the function to determine what option com and user choose
    static userOpt () {
        for (this.i = 0;this.i<Config.controls.length;this.i++) {
            if (Config.controls[this.i].classList.contains('picked')){
                this.user = this.i;
            }
        }
        for (this.j = 0;this.j<Config.comControls.length;this.j++){
            if(Config.comControls[this.j].classList.contains('picked')){
                this.com = this.j;
            }
        }
        this.case = `${this.user}${this.com}`;//represents the condition 
        //determining result
        if (this.com == this.user){
            return "DRAW"
        }
        else if(this.case == '02' || this.case == '10' || this.case == '21'){
            return "WINS"
        }
        else {
            return "LOSE"
        }
    } 
}

//Codes below add animation to result box
class WinAnimation {
    static showWinner(win){
        Config.vs.classList.add('vsAnimation')
        if(win == "DRAW"){
            Config.vs.innerHTML = "DRAW";
            Config.vs.classList.add("green");//greener background for Draw
        }
        else if (win == "WINS"){
            Config.vs.innerHTML = "Player WINS";
        }
        else {
            Config.vs.innerHTML = "COM WINS";
        }
    }
}

//object container
class Config {
    static controls = document.querySelectorAll('.control');
    static refresh = document.querySelector('.refresh');
    static vs = document.querySelector('.vs');
    static comControls = document.querySelectorAll('.comButton')
  }
  
  //class to add picked control button
  class AddClass {
    static target(target) {
        target.classList.add('picked');
    }
  }

  //class to initiate the refresh button action
  class Refresh {
      static refresh (obj) {
          this.hand = new Hand();
          hand.option();
          Config.controls.forEach((opt)=>
          opt.classList.remove('picked'));
          Config.comControls.forEach((box) =>
          box.classList.remove('picked'));
          Config.vs.classList.remove('vsAnimation');
          Config.vs.classList.remove('green')
      }
  }

  //randomize the com choice 
  class Random {
    static random () {
        return Math.floor(Math.random() * 3);
    } 
  }
  
  //the main function of the js this initiates each time the webpage is started
  class Hand {
    constructor () {
      this.kliker = this.klik.bind(this);
      this.refresh = Config.refresh;
      this.refresh.addEventListener("click",Refresh.refresh);
    }

    //add clickable event to the page
    option(){
        Config.vs.innerHTML = "VS";
        Config.controls.forEach((opt) =>
        opt.classList.add('animate-button'));
        Config.controls.forEach((opt) =>
        opt.addEventListener("click",this.kliker,{once:true}));
    }
    
    //initiate the click sequence
    klik(e){
      this.but = e.target;
      this.comChoice = Random.random();
      Config.comControls[this.comChoice].classList.add('picked');
      AddClass.target(this.but);
      this.remove();
      this.winner = WinnerCheck.userOpt();
      WinAnimation.showWinner(this.winner);
    }

    //this codes remove the animation and click event each time the user chooses the control button
    remove(){
         Config.controls.forEach((opt)=>
         opt.classList.remove('animate-button'));
         Config.controls.forEach((opt) =>
         opt.removeEventListener("click",this.kliker,{once:true}));
         Config.vs.innerHTML ="";
     }
      
    }

  const hand = new Hand();//make a new object of the Hand class
  hand.option();//initiate main function
