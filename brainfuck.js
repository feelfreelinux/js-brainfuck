function brainfuck(){
  var code = '++++++++++[>+++++++++++<-]>.'
  var i = code.length;
  var p = 0;
  var cell = new Uint8Array(10);
  for (var i = 0, len = code.length; i < len; i++) {
      switch(code[i]){
        case '+':
          cell[p]++;
          break;
        case '-':
          cell[p]--;
          break;
        case '>':
          p++;
          break;
        case '<':
          p--;
          break;
        case '.':
          console.log(cell[p]);
          break;
        case ',':
          break;
        case '[':
          break;
        case ']':
          break;
      }
  }

}
brainfuck();
