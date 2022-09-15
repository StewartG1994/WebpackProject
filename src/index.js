import { createHome} from "./home";
import {contact } from './contact';
import {menu} from './menu'

createHome()
tab()


function tab ()
{
const menuBtn  = document.querySelector('.menuButton');
const homeBtn = document.querySelector('.homeButton');
const contactBtn = document.querySelector('.contactButton');

contactBtn.addEventListener('click', contact, false)
homeBtn.addEventListener('click', () =>{location.reload()})
menuBtn.addEventListener('click', menu)

}


