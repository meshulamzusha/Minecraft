const body = document.getElementsByTagName('body')[0]
const counters = {}
const blackTypes = ['grass', 'trunk', 'leaves', 'dirt', 'gray', 'red', 'blue', 'gold', 'black']


function createGameWorld() {
    for (let index = 0; index < 594; index++) {
        const block = document.createElement('div');
        block.classList.add('block')

        if (index > 310 && index < 345) {
            block.classList.add('grass')
            block.addEventListener('click', () => {
                if (body.classList.contains('shovel-cursor') && !block.classList.contains('sky')) {
                    block.classList.replace('grass', 'sky')
                    counters.grass = (counters.grass || 0) + 1
                    onFirstBlockClick()
                    updateCache()
                }
                const cursorType = body.className.split('-')[0]
                if (block.classList.contains('sky') && blackTypes.includes(cursorType)) {
                    block.classList.replace('sky', cursorType)
                }
            })
        } else if (index >= 345 && index < 400) {
            block.classList.add('dirt')
            block.addEventListener('click', () => {
                if (body.classList.contains('shovel-cursor') && !block.classList.contains('sky')) {
                    block.classList.replace('dirt', 'sky')
                    counters.dirt = (counters.dirt || 0) + 1
                    onFirstBlockClick()
                    updateCache()
                }
                const cursorType = body.className.split('-')[0]
                if (block.classList.contains('sky') && blackTypes.includes(cursorType)) {
                    block.classList.replace('sky', cursorType)
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
                    onFirstBlockClick()
                    updateCache()
                }

                const cursorType = body.className.split('-')[0]
                if (block.classList.contains('sky') && blackTypes.includes(cursorType)) {
                    block.classList.replace('sky', cursorType)
                }
            })
        } else {
            block.classList.add('sky');
            block.addEventListener('click', () => {
                const cursorType = body.className.split('-')[0]

                if (block.classList.contains('sky') && blackTypes.includes(cursorType)) {
                    block.classList.replace('sky', cursorType)
                }
            })
        }

        document.getElementById('world').appendChild(block);
    }
}




function createTree(firstBlock) {
    const treeMap = [
        [0, 0, 1, 0, 0],
        [0, 1, 1, 1, 0],
        [1, 1, 1, 1, 1],
        [0, 1, 1, 1, 0],
        [0, 0, 2, 0, 0],
        [0, 0, 2, 0, 0],
        [0, 0, 2, 0, 0]
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
                        onFirstBlockClick()
                        updateCache()
                    }

                    const cursorType = body.className.split('-')[0]
                    if (block.classList.contains('sky') && blackTypes.includes(cursorType)) {
                        block.classList.replace('sky', cursorType)
                    }
                })
            }

            if (treeMap[j / 33][i] == 2) {
                block.classList.replace('sky', 'trunk')
                block.addEventListener('click', () => {
                    if (body.classList.contains('axe-cursor') && !block.classList.contains('sky')) {
                        block.classList.replace('trunk', 'sky')
                        counters.trunk = (counters.trunk || 0) + 1
                        onFirstBlockClick()
                        updateCache()
                    }

                    const cursorType = body.className.split('-')[0]
                    if (block.classList.contains('sky') && blackTypes.includes(cursorType)) {
                        block.classList.replace('sky', cursorType)
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

function toggleCache() {
    const cache = document.getElementById('cache-img')
    const cacheArea = document.getElementById('cache-area')
    cache.addEventListener('click', () => {
        cacheArea.classList.toggle('toggle-cache-area')
    })
}

function getCacheItemClasses() {
    const cache = document.getElementById('cache-area')
    const cacheItemClasses = [...cache.children].map(item => {
        return item.classList[1]
    })

    return cacheItemClasses
}

function updateCache() {
    const cache = document.getElementById('cache-area')

    Object.entries(counters).forEach(([blockType, counter]) => {
        if (!getCacheItemClasses().includes(blockType)) {
            const block = document.createElement('div');
            block.classList.add('cache-area-item', blockType)
            block.textContent = counter
            block.addEventListener('click', () => {
                body.className = `${blockType}-cursor`
            })
            cache.appendChild(block)
        } else {
            cache.getElementsByClassName(blockType)[0].textContent = counter
        }
    })
}

function onFirstBlockClick() {
    const cache = document.getElementById('cache-area')
    cache.innerText = ""
    cache.className = 'cache-area'
}

createGameWorld()
createTree(101)
createTree(108)
createTree(83)
createTree(92)
toggleCache()
onToolSelected()