import { createHome} from "./home";
import {contact } from './contact';
import {menu} from './menu'

tab()

function tab ()

{

createHome()
const menuBtn  = document.querySelector('.menuButton');
const homeBtn = document.querySelector('.homeButton');
const contactBtn = document.querySelector('.contactButton');

contactBtn.addEventListener('click', () =>{ 
    
    const contentBox = document.querySelector('.contentBox')
    contentBox.classList.remove('displayToggle');
    contact()
})

homeBtn.addEventListener('click', () =>{location.reload()
 
})
menuBtn.addEventListener('click', menu)

}

export {tab}