const TurnGame =(function(){
  let instance;
  let initiate=function(heroName) {
    let hero={
      name:heroName,
      lev:1,
      maxHp:100,
      hp:100,
      xp:0,
      att:10
    };
    return {
      showLevel: function(){
        document.getElementById('hero-level').innerHTML=hero.lev+'lev';
        return this;
      },
      showXp:function(){
        let self= this;
        if(hero.xp>15*hero.lev){
          hero.xp -= 15*hero.lev;
          hero.maxHp += 10;
          hero.hp = hero.maxHp;
          hero.att +=hero.lev;
          hero.lev++;
          window.setTimeout(function(){
            self.setMessage('레벨업!')
          },1000)
        }
        document.getElementById('hero-xp').innerHTML='XP: '+hero.xp+'/'+15*hero.lev;
        document.getElementById('hero-att').innerHTML='ATT: '+hero.att;
        return this.showLevel().showHp();
      },
      showHp:function(){
        if(hero.hp<0){
          return this.gameOver();
        }
        document.getElementById('hero-hp').innerHTML='HP: '+hero.hp+'/'+hero.maxHp;
        return this;
      },
      toggleMenu: function(){
        document.getElementById('hero-name').innerHTML =hero.name;
        document.getElementById('start-screen').style.display = 'none';
        if(document.getElementById('game-menu').style.display ==='block'){
          document.getElementById('game-menu').style.display = 'none';
          document.getElementById('battle-menu').style.display ='block';
          document.getElementById('battle-input').focus();
        } else {
          document.getElementById('game-menu').style.display='block';
          document.getElementById('battle-menu').style.display='none';
          document.getElementById('menu-input').focus();
        }
        return this;
      },
      setMessage: function(msg){
        document.getElementById('message').innerHTML = msg;
        return this;
      }
    }
  };
  return{
    getInstance:function(name){
      if(!instance){
        instance=initiate(name)
      }
      return instance;
    }
  }
})()

document.getElementById('start-screen').onsubmit=function(e){
  let name= document.getElementById('name-input').value;
  console.log(name);
  e.preventDefault();
  if(name && name.trim()&& confirm(name+'으로 하시겠습니까?')){
    TurnGame.getInstance(name).showXp().toggleMenu();
  } else {
    alert('이름을 입력해주세요.');
  }
};

document.getElementById('game-menu').onsubmit=function(e){
  var input = document.getElementById('menu-input');
  var option = input.value;
  e.preventDefault();
  input.value = '';
}

document.getElementById('battle-menu').onsubmit = function(e) {
  var input = document.getElementById('battle-input');
  var option = input.value;
  e.preventDefault();
  input.value = '';
};
