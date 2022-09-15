import './styles.css';
import passion from './images/passion.jpg';
import pizza from './images/pizza.jpg';
import image from './images/image.jpg';


const content = document.querySelector('.content')

function createHome () {

content.textContent = '';
const contentBox = document.createElement('div')
contentBox.classList.add('contentBox')
const header = document.createElement('div');
const title = document.createElement('h1')
title.textContent = 'Paddys Pizza Palace'
header.classList.add('header')
header.appendChild(title)
content.appendChild(header)

const navDiv = document.createElement('div')
const navList = document.createElement('ul')
navList.classList.add('navBar')
const homeBtn = document.createElement('button')
const menuBtn = document.createElement('button')
const contactBtn = document.createElement('button')
contactBtn.classList.add('contactButton')
homeBtn.classList.add('homeButton')
menuBtn.classList.add('menuButton')
homeBtn.textContent = 'Home';
menuBtn.textContent = 'Menu';
contactBtn.textContent = 'Contact'

navDiv.appendChild(navList)
navList.appendChild(homeBtn)
navList.appendChild(menuBtn)
navList.appendChild(contactBtn)
content.appendChild(navDiv)


const about = document.createElement('div');
const aboutContent = document.createElement('p')
aboutContent.textContent= 'Our love affair with Italian food is long-term. In 1965, a wise man called Peter Worthington knew pizza in London could be better. So he shipped over an authentic oven from Italy, opened the first-ever Paddys Pizza and got to work serving the great pizza the UK deserved.'
about.appendChild(aboutContent)
contentBox.appendChild(about)
about.classList.add('about')

const gridDiv = document.createElement('div');
gridDiv.classList.add('passionsGrid')


const itemOne = document.createElement('div');
const pSentence = document.createElement('p');
const poneheader = document.createElement('h1');
poneheader.textContent = 'Our Passion';
pSentence.textContent = 'We have deep rooted passion for pizza and  you can trust our 300 years of delivering tasty slices of pizza'
const imageOne = new Image()
imageOne.src = passion;
itemOne.appendChild(poneheader)
itemOne.appendChild(imageOne)
itemOne.appendChild(pSentence)


imageOne.classList.add('imageOne')
itemOne.classList.add('itemOne')

const itemTwo = document.createElement('div');
const p2Sentence = document.createElement('p');
const p2header = document.createElement('h1');
p2header.textContent = 'International Flavor';
p2Sentence.textContent = 'Introduce new flavours into your life with the Paddys Pizza Palace international offerings';
const imageTwo = new Image();
imageTwo.src = pizza;
itemTwo.appendChild(p2header)
itemTwo.appendChild(imageTwo)
itemTwo.appendChild(p2Sentence);
imageTwo.classList.add('imageOne');
itemTwo.classList.add('itemOne');

const itemThree = document.createElement('div');
const p3Sentence = document.createElement('p');
const p3header = document.createElement('h1');
p3header.textContent = 'Paddys Partnerships';
p3Sentence.textContent = 'Get access to exclusing partnerships when you dine with Paddys Pizza Palace';
const imageThree = new Image();
imageThree.src = image;
itemThree.appendChild(p3header)
itemThree.appendChild(imageThree)
itemThree.appendChild(p3Sentence);
imageThree.classList.add('imageOne');
itemThree.classList.add('itemOne');

gridDiv.appendChild(itemOne)
gridDiv.appendChild(itemTwo)
gridDiv.appendChild(itemThree)
contentBox.appendChild(gridDiv)

const footer = document.createElement('div');
footer.textContent = 'A project by Stewart Gliniecki as part of The Odin Project Curriculum'
footer.classList.add('footer')
content.appendChild(contentBox)
content.appendChild(footer)
}


export {createHome}