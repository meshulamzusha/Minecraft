for (let index = 0; index < 594; index++) {
    const box = document.createElement('div');
    box.classList.add('block')

    if (index > 310 && index < 345) {
        box.classList.add('grass')
        box.addEventListener('click', () => {
            box.classList.replace('grass', 'sky')
        })
    } else if (index >= 345 && index < 400) {
        box.classList.add('dirt')
        box.addEventListener('click', () => {
            box.classList.replace('dirt', 'sky')
        })
    } else if (index >= 400 && index < 594) {
        const random = Math.floor(Math.random() * 5);
        const stoneType = ['gold', 'red', 'blue', 'black', 'gray'][random]

        box.classList.add(stoneType)
        box.addEventListener('click', () => {
            box.classList.replace(stoneType, 'sky')
        })
    } else {
        box.classList.add('sky');
    }

    document.getElementById('world').appendChild(box);

}

createTree(68)
createTree(75)
createTree(83)
createTree(92)

function createTree(firstBlock) {
    const treeMap = [
        [0, 0, 1, 1, 0, 0],
        [0, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [0, 0, 2, 2, 0, 0],
        [0, 0, 2, 2, 0, 0],
        [0, 0, 2, 2, 0, 0],
        [0, 0, 2, 2, 0, 0]
    ]


    for (let i = 0; i < treeMap[0].length; i++) {
        for (let j = 0; j < treeMap.length * 33; j += 33) {
            const block = document.getElementById('world').children[i + j + firstBlock]

            if (treeMap[j / 33][i] == 1) {
                block.classList.replace('sky', 'leaves')
                block.addEventListener('click', () => {
                    block.classList.replace('leaves', 'sky')
                })
            }

            if (treeMap[j / 33][i] == 2) {
                block.classList.replace('sky', 'trunk')
                block.addEventListener('click', () => {
                    block.classList.replace('trunk', 'sky')
                })
            }
        }
    }
}