// add Event Listener on window on keydown event
window.addEventListener("keydown", (e) => {
  // create constant variable to queryselecter audio data-key = `audio[data-key={"e.keyCode}"]`
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  // create constant to queryselect class key
  // console.log(key)
  // if no audio then return  //Stops the function from running all together
  // audio.currentTime = 0 // rewind to the start
  // audio.play() // plays the audio
  // add class of playing tao key variable
});

// Need to take away border after click
// create constant varaible to queryselectAll key class
// console.log(keys)
// loop through keys with forEach, addeventlistner(transitionend), second parameter/function removeTransition
// Create function removeTransition
// console.log(e)
// if property name does not equal "transform" return noting // This will skip if it's not a transform
//console.log(e.propertyName)
//console.log(this)
// use this to remove class playing
