
import {text} from './text.js'

self.addEventListener('DOMContentLoaded', () => {  
    
    let count = 0

    
    const cnt = document.getElementById('cnt');
    const img = document.getElementById('img');
    const resetBtn = document.getElementById('resetBtn');
    const preBtn = document.getElementById('preBtn');
    const nextBtn = document.getElementById('nextBtn');
    const pre = document.getElementById('pre');
    
    resetBtn.onclick = () => {
        count = 0 
        setState()
    }
    
    nextBtn.onclick = () => {
        count = (count < 11)? count + 1 : 11
        setState()
    }

    preBtn.onclick = () => {
        count = (count > 0) ? count - 1 : 0 
        setState() 
    }
    
    const setState = () => {
        resetBtn.disabled = (count === 0);
        preBtn.disabled = (count === 0);
        nextBtn.disabled = (count === 11);
        img.src = `./images/Holon-Comms${count}.png`;
        cnt.textContent = ` Slide: ${count}`
        const slideText = text[count]
        pre.textContent = `        ${slideText}`
    }
    
    setState()
    
})