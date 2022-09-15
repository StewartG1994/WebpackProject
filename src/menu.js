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

    const itemOne = menuItemFactory('Pizza', pizza, 'test')
    const itemTwo = menuItemFactory('Test', pizza, 'Test')
    const itemThree = menuItemFactory('Test', pizza, 'Test')
    const itemFour = menuItemFactory('Test', pizza, 'Test')
    const itemFive = menuItemFactory('Test', pizza, 'Test')
    const itemSix = menuItemFactory('Test', pizza, 'Test')
    contentBox.appendChild(itemOne.itemBox())
    contentBox.appendChild(itemTwo.itemBox())
    contentBox.appendChild(itemThree.itemBox())

    contentBox.appendChild(itemFour.itemBox())
    contentBox.appendChild(itemFive.itemBox())
    contentBox.appendChild(itemSix.itemBox())


    
}

export {menu}