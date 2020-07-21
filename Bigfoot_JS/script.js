*/ Ensures Bigfoot loads with image, not before background loads. This would make the game too easy, of course. */
function loadBigFoot() {
  document.getElementById('bigFoot').src = 'bigfoot.png'
}


*/ Selecting Bigfoot generates victory alert. Bigfoot's location on the page is then shifted from the default position to a randomly revised x - y coordinate for the next round. */
function moveBigFoot() {
  alert('Woohoo, you win! You found Bigfoot!')
  var picture = document.getElementById('bigFoot')

  var x = Math.random() * 300
  var y = Math.random() * 300

  picture.style.top = x + 'px'
  picture.style.left = y + 'px'
}
