// 2. Write a JavaScript program to get the width and height of the window (any time the window is resized).


const getWindowHeight = () => console.log(`current height ${window.innerHeight}`)
const getWindowWidth = () => console.log(`current width ${window.innerWidth}`)


const init = () => window.addEventListener('resize', () => {
     getWindowHeight(); 
     getWindowWidth();
     console.log('===========')
})

init()