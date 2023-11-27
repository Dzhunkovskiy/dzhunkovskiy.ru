const pageBody = document.querySelector('.page-body')

function createNewElement(tag, ...classes) {
    let newItem = document.createElement(tag)
    classes.forEach((cl) => newItem.classList.add(cl))
    return newItem
}

const debounce = (fn, debounceTime) => {
    let timeout
    return function () {
        const fnCall = () => {
            fn.apply(this, arguments)
        }
        clearTimeout(timeout)
        timeout = setTimeout(fnCall, debounceTime)
    }
}

const wrapper = createNewElement('div', 'wrapper')
const searchWrapper = createNewElement('div', 'search-wrapper')
const input = createNewElement('input', 'search-input')
const optionList = createNewElement(
    'ul',
    'search-option-list',
    'visually-hidden'
)
const repoList = createNewElement('ul', 'repo-list')

input.type = 'search'
input.autocomplete = 'off'
input.id = 'search'
searchWrapper.appendChild(input)
searchWrapper.appendChild(optionList)
wrapper.appendChild(searchWrapper)
wrapper.appendChild(repoList)
pageBody.appendChild(wrapper)

function removeRepo(e) {
    if (e.target.classList.contains('remove-repo-btn')) {
        e.target.parentNode.parentNode.removeChild(e.target.parentNode)
    }
}

async function getData(text) {
    try {
        const response = await fetch(
            `https://api.github.com/search/repositories?q=${text}`
        )
        if (!response.ok) {
            throw new Error('Ошибка соединения')
        }
        const data = await response.json()
        return data
    } catch (error) {
        alert(error.message)
    }
}

async function createOptionList() {
    try {
        const inData = await getData(input.value)
        if (!inData['items']) {
            throw new Error('Ошибка')
        }
        for (i = 0; i < 5; i++) {
            let optionName = inData['items'][i]['name']
            let option = createNewElement('li', 'search-option-list__item')
            option.textContent = optionName
            option.id = i
            optionList.appendChild(option)
        }
    } catch (error) {
        throw new Error('Нет результатов')
    }
}

createOptionList = debounce(createOptionList, 1000)

async function addRepoToList(id, parent) {
    const inData = await getData(input.value)
    const name = inData['items'][id]['name']
    const owner = inData['items'][id]['owner']['login']
    const stars = inData['items'][id]['stargazers_count']
    const repoItem = createNewElement('li', 'repo-list__item', 'repo-item')
    const repoItemName = createNewElement(
        'p',
        'repo-list__info',
        'repo-item__name'
    )
    const repoItemOwner = createNewElement(
        'p',
        'repo-list__info',
        'repo-item__owner'
    )
    const repoItemStars = createNewElement(
        'p',
        'repo-list__info',
        'repo-item__stars'
    )
    repoItemName.textContent = `Name: ${name}`
    repoItemOwner.textContent = `Owner: ${owner}`
    repoItemStars.textContent = `Stars: ${stars}`
    const closeBtn = createNewElement('button', 'remove-repo-btn')
    closeBtn.type = 'button'
    repoItem.appendChild(repoItemName)
    repoItem.appendChild(repoItemOwner)
    repoItem.appendChild(repoItemStars)
    repoItem.appendChild(closeBtn)
    parent.appendChild(repoItem)
}

input.addEventListener('keyup', () => {
    if (optionList.childElementCount > 0) {
        optionList.innerHTML = null
    }
    createOptionList()
})

input.addEventListener('focus', () => {
    optionList.classList.remove('visually-hidden')
})

searchWrapper.addEventListener('focusout', () => {
    if (optionList.classList.contains('visually-hidden')) return
    setTimeout(() => {
        optionList.classList.add('visually-hidden')
    }, 200)
})

optionList.addEventListener('click', (e) => {
    let optionId = e.target.id
    addRepoToList(optionId, repoList)
    optionList.classList.add('visually-hidden')
    input.value = ''
})

repoList.addEventListener('click', removeRepo)
