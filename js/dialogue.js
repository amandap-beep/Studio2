function showDialogue(elementId, text, speed=40, callback=null) {
  const element = document.getElementById(elementId);
  element.innerHTML = "";
  let i = 0;
  
  const interval = setInterval(() => {
    element.innerHTML += text.charAt(i);
    i++;
    if(i >= text.length) {
      clearInterval(interval);
      if(callback) callback();
    }
  }, speed);
}
