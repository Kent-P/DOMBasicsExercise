const xMen = document.getElementById(`x-men`);
console.log(xMen)

const centered = document.getElementsByClassName(`center`)
console.log(centered)

const batman = document.querySelector(`div`)
console.log(batman)

const h3s = document.querySelectorAll(`h3`)
console.log(h3s)

const h1 = document.querySelector(`h1`)
console.log(h1)

h1.innerText = `The Best Animated Superhero TV Shows Ever!`

const honorableMentions = document.getElementById(`honorable-mentions`)
console.log(honorableMentions)

honorableMentions.innerHTML = `<p>OTHER GREAT SHOWS</p>`

const aTag = document.querySelector(`a`)
console.log(aTag)

aTag.href = `https://fandomwire.com/15-greatest-animated-superhero-shows-ever-made-ranked/`

h1.classList.add(`background`, `text-color`)

h1.classList.remove(`background`)

const h4 = document.createElement(`h4`)

h4.innerText = 'Is "The Transformers" A Superhero Show?'

const body = document.querySelector(`body`)

body.prepend(h4)

const h5 = document.createElement(`h5`)

h5.innerText = "Heroes in a half shell Turtle Power!"

aTag.insertAdjacentElement(`afterend`, h5)

const li = document.querySelector(`li`)

li.remove()