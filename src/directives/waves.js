export default {
  bind: (el, params, vnode) => {
    el.onclick = (e) => {
  
      el.style.position = 'relative'
      el.style.overflow = 'hidden'
      let color = params.value || '#fff';
      let x = ((e.pageX - el.offsetLeft) / el.offsetLeft) + (e.pageX - el.offsetLeft);
      let y = e.pageY - el.offsetTop;

      let wavesDiv = document.createElement('div');
      wavesDiv.classList.add('waves');
      wavesDiv.setAttribute('style', `top: ${y}px; left: ${x}px; background: ${color}`);

      el.appendChild(wavesDiv);
      setTimeout(function(){
        wavesDiv.parentElement.removeChild(wavesDiv);
      }, 900);

    }
  }
}
