const circle = document.querySelector('#circle')

const icons = document.querySelectorAll('li')


for (let icon of icons){
    icon.onclick = function (e) {

        for (let icon of icons){
            icon.style.opacity = '1'
        }
        
        const number = this.value
        
        circle.style.left = 20*number + 10 + '%'
        circle.innerHTML = this.innerHTML
        this.style.opacity = '0'
    }
}