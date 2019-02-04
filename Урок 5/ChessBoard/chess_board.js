function drawChess() {
  var $board = document.getElementById('mainBlock');
  var colorCell = true;  
    
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      if (j === 0){
        colorCell = !colorCell;  
      }
     var $block = document.createElement('div');
     $board.appendChild($block);
      if (colorCell) {
        $block.classList.add('block', 'black');     
        } else {
          $block.classList.add('block', 'white');    
        }
        colorCell = !colorCell;
    }
  }
}

drawChess();