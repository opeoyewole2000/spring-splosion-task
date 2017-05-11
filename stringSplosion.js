class StringSplosion{
  
  constructor(stringArg){
    this.stringArg = stringArg;
    
  }
  
  
  manipulate()
  {
    let splodedStringArray = [];
   // currentLetter = '';
    let stringArgLength = this.stringArg.length;
    for(let counter = 1;counter<=stringArgLength;counter++){
      //currentLetter = stringArg.charAt(i);
      
      
        splodedStringArray.push(this.stringArg.substring(0,counter))
        
      
      
    }
    
    return splodedStringArray.join('');
    
  }
  
  
  
}

let c = new StringSplosion('phone');
c.manipulate()

exports.StringSplosion = StringSplosion;