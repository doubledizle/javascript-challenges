// Write a function that returns "hello world!" in an interesting way.

var greet = function(){  
  let f = "Now, this is a story all about how........................."[31] + 
          "My life got flipped-turned upside down....................."[ 6] +
          "And I'd like to take a minute just sit right there........."[ 8] +
          "I'll tell you how I became the prince......................"[ 2] +
          "Of a town called Bel-Air..................................."[ 0] +
          
          "In West Philadelphia born and raised......................."[ 2] + 
          "On the playground was where I spent most of my days........"[18] +
          "Chillin' out, maxin'......................................."[ 9] +
          "Relaxin', all cool........................................."[ 0] +
          "And all shootin' some b-ball outside of the school........."[ 5] +
          "When a couple of guys who were up to no good..............."[43] +
          "Started making trouble in my neighborhood!................."[41];
          "I got in one little fight and my mom got scared. She said......";
          "You're movin' with your auntie and uncle in Bel-Air!...........";

          "I whistled for a cab and when it came near.....................";
          "The license plate said, 'Fresh' and it had dice in the mirror..";
          "If anything I could say that this cab was rare.................";
          "But I thought 'Nah, forget it, yo, holmes to Bel Air'..........";
  
          "I pulled up to the house about seven or eight..................";
          "And I yelled to the cabbie, 'Yo holmes, smell ya later'........";
          "I looked at my kingdom, I was finally there....................";
          "To sit on my throne as the prince of Bel-Air...................";
  return f.toLowerCase().toString()
}

console.log(greet())
