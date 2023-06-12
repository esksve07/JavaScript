
var EL_clicker_button = document.querySelector('#clicker_img')
var EL_antall_clicks = document.querySelector('#antall_clicks')
var trofe_antall = 0
var EL_save = document.querySelector('#save_button')
var EL_load = document.querySelector('#load_button')
var EL_new = document.querySelector('#new_button')
var engine_antall = 1
var principal_antall = 1
var aero_antall = 1
var tires_antall = 1

var EL_engine_click = document.querySelector('#engine_click')
var EL_engine =document.querySelector('#engine_upg')

var EL_principal_click = document.querySelector('#principal_click')
var EL_principal =document.querySelector('#principal_upg')

var EL_aero_click = document.querySelector('#aero_click')
var EL_aero =document.querySelector('#aero_upg')

var EL_tires_click = document.querySelector('#tires_click')
var EL_tires =document.querySelector('#tires_upg')

var EL_passive = 10
var EL_click = 10





function save() {
    localStorage.trofe_antallST = trofe_antall
    localStorage.engine_antallST = engine_antall
    localStorage.principal_antallST = principal_antall
    localStorage.aero_antallST = aero_antall
    localStorage.tires_antallST = tires_antall
    console.log(localStorage.trofe_antallST)
    console.log(localStorage.engine_antallST)
    console.log(localStorage.principal_antallST)
    console.log(localStorage.aero_antallST)
    console.log(localStorage.tires_antallST)
    console.log("saved")
}

function load() {
    trofe_antall = JSON.parse(localStorage.trofe_antallST)
    engine_antall = JSON.parse(localStorage.engine_antallST)
    principal_antall = JSON.parse(localStorage.principal_antallST)
    aero_antall = JSON.parse(localStorage.aero_antallST)
    EL_antall_clicks.innerHTML = trofe_antall
    EL_engine_click.innerHTML = engine_antall
    EL_aero_click.innerHTML = aero_antall
    EL_tires_click.innerHTML = tires_antall
    console.log("loaded")
}

function restart() {
    confirm("er du sikker");
    localStorage.clear()
    location.reload()
    console.log("New")



}






function click2(){

    trofe_antall = trofe_antall + EL_click
    EL_antall_clicks.innerHTML = "Trofer: " + trofe_antall
    console.log('click func ran')

}


function engine(){
    
    if (trofe_antall >= 1000) {
        trofe_antall = trofe_antall - 1000
        engine_antall = engine_antall + 1
        EL_engine_click.innerHTML = "Lvl: " + engine_antall
        EL_antall_clicks.innerHTML = "Trofer: " + trofe_antall
        EL_click = EL_click + 10

    }



    console.log('click func rann')
    
}

function principal(){
    
    if (trofe_antall > 10000) {
        trofe_antall = trofe_antall - 10000
        principal_antall = principal_antall + 1
        EL_principal_click.innerHTML = "Lvl: " + principal_antall
        EL_antall_clicks.innerHTML = "Trofer: " + trofe_antall
        EL_passive = EL_passive + 100
    }
    
    console.log('click func rannnnn')
}

function aero(){
    
    if (trofe_antall >= 100000) {
        trofe_antall = trofe_antall - 100000
        aero_antall = aero_antall + 1
        EL_aero_click.innerHTML = "Lvl: " + aero_antall
        EL_antall_clicks.innerHTML = "Trofer: " + trofe_antall
        EL_click = EL_click + 100
    }
    console.log('click func aero')
    
}

function tires(){
    if (trofe_antall > 1000000) {
        trofe_antall = trofe_antall - 1000000
        tires_antall = tires_antall + 1
        EL_tires_click.innerHTML = "Lvl: " + tires_antall
        EL_antall_clicks.innerHTML = "Trofer: " + trofe_antall
        EL_passive = EL_passive + 1000
    }
    console.log('click func tires')
    
}



function passive_clicks() {
    
    console.log('trofe timer passive: '+ trofe_antall)
    trofe_antall += EL_passive
    EL_antall_clicks.innerHTML = "Trofer: " + trofe_antall

}


setInterval(passive_clicks, 1000) // kjører funksjonen myTimer hvert sekund, (1000ms)



EL_clicker_button.addEventListener('click', click2)
EL_save.addEventListener('click', save)
EL_load.addEventListener('click', load)
EL_new.addEventListener('click', restart)
EL_engine.addEventListener('click', engine)
EL_principal.addEventListener('click', principal)
EL_aero.addEventListener('click', aero)
EL_tires.addEventListener('click', tires)
