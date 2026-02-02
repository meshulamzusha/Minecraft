for (let index = 0; index < 608; index++) {
    const box = document.createElement('div');
    box.classList.add('block')

    if (index > 300 && index < 335) {
        box.classList.add('grass')
        box.addEventListener('click', () => {
            box.classList.replace('tree', 'sky')
        })
    } else if (index >= 335 && index < 420) {
        box.classList.add('dirt')
        box.addEventListener('click', () => {
            box.classList.replace('tree', 'sky')
        })
    } else if (index >= 420 && index < 608) {
        const random = Math.floor(Math.random() * 5);
        const stoneType = ['gold', 'red', 'blue', 'black', 'gray'][random]

        box.classList.add(stoneType)
        box.addEventListener('click', () => {
            box.classList.replace('tree', 'sky')
        })
    } else {
        box.classList.add('sky');
    }

    document.getElementById('world').appendChild(box);
}

console.log(document.getElementById('world').children.item(120));


function renderTree(hight, width, treeTop) {
    const blocks = document.getElementById('world')

    for (let i = treeTop; i < treeTop + (hight * 32) ; i++) {
        document.getElementById('world').children.replace()
    } 
}