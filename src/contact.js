import './styles.css';
import {tab} from './index';

function contact() {

    const contentBox = document.querySelector('.contentBox')
    contentBox.classList.toggle('contentBox');



    contentBox.textContent = '';
    const contactdiv = document.createElement('div');
    const contactp = document.createElement('p');
    const contactb = document.createElement('p');
    const contactc = document.createElement('p');
    const contactd = document.createElement('p');
    const contacte = document.createElement('p');
    const contactf = document.createElement('p');
    contactdiv.classList.add('contactp')
    contactp.textContent = "Paddys Pizza Palace"
    contactb.textContent = '54 Saint Martins Close'
    contactc.textContent = 'Blackfriars';
    contactd.textContent = 'London'
    contacte.textContent= '01532 560 450';
    contactf.textContent = 'PaddysPizzaPalace@bigman.com'


    contactdiv.appendChild(contactp)
    contactdiv.appendChild(contactb)
    contactdiv.appendChild(contactc)
    contactdiv.appendChild(contactd)
    contactdiv.appendChild(contacte)
    contactdiv.appendChild(contactf)
    contentBox.appendChild(contactdiv);
 

}

export {contact}