var t = new Date()
var diff = n(0)
var timestart = n(0)
var shift = false

var ordNum = [null,"一","二","三","四","五","六","七","八"]
var ndAutoCDTicker = n(0)
//define player
var player = {}
load()
loader("am",n(10))
loader("ip",n(0))
loader("energy",n(0))
loader("infTime",n(0))
loader("infinitied",false)
loader("autoNDSetting",n(0))
loader("rewinded",false)
for(upg in iu){
    loader(["iu",upg],n(0))
    loader(["iuUnl",Number(upg)-Number(upg)%10],false)
}
var timer = Number(t.getTime())
function setup(){
    let tmpStr = ""
    for(dim = 1; dim <= 8; dim++){
        loader(["nd",dim,"num"],n(0))
        loader(["nd",dim,"bought"],n(0))
        tmpStr += `
        <div class="dimName" id="nd${dim}name" style="visibility:hidden">物质${ordNum[dim]}维 <span class="dimMult" id="nd${dim}mult">1</span></div>
        <div class="dimNum" id="nd${dim}num" style="visibility:hidden"></div>
        <div class="dimProc" id="nd${dim}proc" style="visibility:hidden"></div>
        <button class="dimBuy" id="nd${dim}buy" onClick=buyND(${dim}) style="visibility:hidden"></button>
        `
    }
    e("nd").innerHTML = tmpStr
    tmpStr = ""
    let lastRow = 1
    for(i in iu){
        i = Number(i)
        if(lastRow != i-i%10) tmpStr += `</div>`
        tmpStr += `<button id="iu${i}" onclick="buyIU(${i})"></button>`
        if(!(i%10)) tmpStr += `<div style="font-size:0">`
        lastRow = i-i%10
    }
    tmpStr += `</div>`
    w("iuTable",tmpStr)
    e("ndAutoInput").value = format(player.autoNDSetting)
    HTMLupdate()
}

setup()
t = new Date()
timestart = t.getTime()
console.log("游戏初始化使用了"+(Number(t.getTime()) - timer)+"ms")