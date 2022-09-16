import pizza from './images/pizza.jpg';
import './styles.css'


const menuItemFactory = (item, Itemimage, description) =>{


    const itemBox = () =>{

        const itemDiv = document.createElement('div')
        const itemHeader = document.createElement('h1');
        const image = new Image();
        const descriptionItem  = document.createElement('p');


        itemHeader.textContent = item
        image.src = Itemimage;
        image.classList.add('imageOne')

        descriptionItem.textContent = description;

        itemDiv.appendChild(itemHeader)
        itemDiv.appendChild(image)
        itemDiv.appendChild(descriptionItem)
        itemDiv.classList.add('itemDiv')

        return itemDiv

    } 

    return{itemBox}
}

function menu() {
    const contentBox = document.querySelector('.contentBox')
    contentBox.classList.toggle('displayToggle')
    contentBox.textContent = '';

    const itemOne = menuItemFactory('Cheese', pizza, '£4.99')
    const itemTwo = menuItemFactory('Pepperani', pizza, '£5.49')
    const itemThree = menuItemFactory('Bacon and Egg', pizza, '£9.99')
    const itemFour = menuItemFactory('Napoli', pizza, '£12.99')
    const itemFive = menuItemFactory('Beans', pizza, '£6.99')
    const itemSix = menuItemFactory('Pinapple', pizza, 'Banned from establishment')
    contentBox.appendChild(itemOne.itemBox())
    contentBox.appendChild(itemTwo.itemBox())
    contentBox.appendChild(itemThree.itemBox())

    contentBox.appendChild(itemFour.itemBox())
    contentBox.appendChild(itemFive.itemBox())
    contentBox.appendChild(itemSix.itemBox())


    
}

export {menu}