const body = document.getElementsByTagName('body')[0]
const counters = {}


function createGameWorld() {
    for (let index = 0; index < 594; index++) {
        const block = document.createElement('div');
        block.classList.add('block')

        if (index > 310 && index < 345) {
            block.classList.add('grass')
            block.addEventListener('click', () => {
                if (body.classList.contains('shovel-cursor') && !block.classList.contains('sky')
                ) {
                    block.classList.replace('grass', 'sky')
                    counters.grass = (counters.grass || 0) + 1
                    console.log(counters)
                }
            })
        } else if (index >= 345 && index < 400) {
            block.classList.add('dirt')
            block.addEventListener('click', () => {
                if (body.classList.contains('shovel-cursor') && !block.classList.contains('sky')) {
                    block.classList.replace('dirt', 'sky')
                    counters.dirt = (counters.dirt || 0) + 1
                    console.log(counters)
                }
            })
        } else if (index >= 400 && index < 594) {
            const random = Math.floor(Math.random() * 5);
            const stoneType = ['gold', 'red', 'blue', 'black', 'gray'][random]

            block.classList.add(stoneType)
            block.addEventListener('click', () => {
                if (body.classList.contains('pickaxe-cursor') && !block.classList.contains('sky')) {
                    block.classList.replace(stoneType, 'sky')
                    counters[stoneType] = (counters[stoneType] || 0) + 1
                    console.log(counters)
                }
            })
        } else {
            block.classList.add('sky');
        }

        document.getElementById('world').appendChild(block);
    }
}




function createTree(firstBlock) {
    const treeMap = [
        [0, 0, 1, 1, 0, 0],
        [0, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 0],
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
                    if (body.classList.contains('axe-cursor') && !block.classList.contains('sky')) {
                        block.classList.replace('leaves', 'sky')
                        counters.leaves = (counters.leaves || 0) + 1
                        console.log(counters)
                    }
                })
            }

            if (treeMap[j / 33][i] == 2) {
                block.classList.replace('sky', 'trunk')
                block.addEventListener('click', () => {
                    if (body.classList.contains('axe-cursor') && !block.classList.contains('sky')) {
                        block.classList.replace('trunk', 'sky')
                        counters.trunk = (counters.trunk || 0) + 1
                        console.log(counters)
                    }
                })
            }
        }
    }
}


function onToolSelected() {
    const toolsCollection = document.getElementsByClassName('game-tool')
    const tools = [...toolsCollection]

    tools.forEach(tool => {
        tool.addEventListener('click', (event) => {
            tools.forEach(t => {
                t.classList.remove('selected-tool')
            })

            tool.classList.add('selected-tool')

            const toolType = event.target.alt
            body.className = `${toolType}-cursor`
        })
    })
}

const cache = document.getElementById('cache-img')
const cacheArea = document.getElementById('cache-area')
cache.addEventListener('click', () => {
    cacheArea.classList.toggle('toggle-cache-area')
})


onToolSelected()
createGameWorld()
createTree(68)
createTree(75)
createTree(83)
createTree(92)