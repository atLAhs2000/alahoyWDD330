// an animation for an object being removed from the dom
export function removedAnimate(obj) {
    obj.classList.add('removed');
    setTimeout(function(){ obj.remove(); }, 300);
}