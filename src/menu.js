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
    contentBox.textContent = '';

    const itemOne = menuItemFactory('Pizza', pizza, 'test')
    const itemTwo = menuItemFactory('Test', pizza, 'Test')
    contentBox.appendChild(itemOne.itemBox())
    contentBox.appendChild(itemTwo.itemBox())

    
}

export {menu}