var clock = document.querySelector('#clock')
var color = document.querySelector('#color')

function hexColor(){
    var time = new Date()
    var h = time.getHours().toString()
    var m = time.getMinutes().toString()
    var s = time.getSeconds().toString()
    console.log(h, m, s)
    if(h.length < 2){
        h = '0' + h
    }
    if(m.length < 2){
        m = '0' + m
    }
    if(s.length < 2){
        s = '0' + s
    }
    console.log(h, m, s)
    var clockString = h + ':' + m + ':' + s
    var colorString = '#' + h + m + s
    clock.textContent = clockString
    color.textContent = colorString
    document.body.style.backgroundColor = colorString
}
hexColor()
setInterval(hexColor, 1000)