const jogo = {
    personagem: {
        "vida": 100,
        "ataque": 8,
        "dinheiro": 0,
    },
    inimigos: {
        "goblin": { "ataque": 3, "vida": 20 },
        "orc": { "ataque": 8, "vida": 30 },
        "dragao": { "ataque": 3, "vida": 999 }
    }
}
const heart = document.getElementById("vida").innerHTML = jogo.personagem.vida
const sword = document.getElementById("ataque").innerHTML = jogo.personagem.ataque
const money = document.getElementById("dinheiro").innerHTML = jogo.personagem.dinheiro
const sowrdg = document.getElementById("ataqueg").innerHTML = jogo.inimigos.goblin.ataque
const heartg = document.getElementById("vidag").innerHTML = jogo.inimigos.goblin.vida
const btn1 = document.getElementById("btn1")
const nivel1 = document.getElementById("nivel1")
const nivel2 = document.getElementById("nivel2")
const btn2 = document.getElementById("btn2")
const fugir = document.getElementById("fugir")
const ataque = document.getElementById("ataque")
const hearo = document.getElementById("vidao").innerHTML = jogo.inimigos.orc.vida
const ataqueo = document.getElementById("ataqueo").innerHTML = jogo.inimigos.orc.ataque
const texto = document.getElementById("texto")
const btn3 = document.getElementById("btn3")
const vidad = document.getElementById("vidad").innerHTML = jogo.inimigos.dragao.vida
const ataqued=document.getElementById("ataqued").innerHTML=jogo.inimigos.dragao.ataque
function explorar() {
    btn1.style.display = "none"
    nivel1.style.display = "inline-block"
    texto.innerHTML = "Você encntrou um goblin"

}

function atualizar() {
    const heart = document.getElementById("vida").innerHTML = jogo.personagem.vida
    const sword = document.getElementById("ataque").innerHTML = jogo.personagem.ataque
    const money = document.getElementById("dinheiro").innerHTML = jogo.personagem.dinheiro
    const sowrdg = document.getElementById("ataqueg").innerHTML = jogo.inimigos.goblin.ataque
    const heartg = document.getElementById("vidag").innerHTML = jogo.inimigos.goblin.vida
    const hearo = document.getElementById("vidao").innerHTML = jogo.inimigos.orc.vida
    const ataqueo = document.getElementById("ataqueo").innerHTML = jogo.inimigos.orc.ataque
    const vidad = document.getElementById("vidad").innerHTML = jogo.inimigos.dragao.vida
    const ataqued=document.getElementById("ataqued").innerHTML=jogo.inimigos.dragao.ataque
}
atualizar()
function atacar1() {
    const goblin = jogo.inimigos.goblin
    const jogador = jogo.personagem
    if(jogador.vida<0){
        jogador.vida=0
        atualizar()
        window.alert("vida zerada, descanse")
        return
    }
    if (goblin.vida <0) {
        btn2.style.display = "none"
        goblin.vida = 0
        texto.innerHTML = "Inimigo derrotado <br/>+10 de ouro <br/> aguarde 2s para o proximo nivel"
        jogador.dinheiro += 10
        setTimeout(() => {
            nivel1.style.display = "none"
            nivel2.style.display = "inline-block"
            texto.innerHTML = "Você encontrou um orc"
        }, 3000);
        atualizar()
    }
    else{
    goblin.vida -= jogador.ataque
    jogador.vida -= goblin.ataque
    }
    atualizar()
}
function atacar2() {
    const orc = jogo.inimigos.orc
    const jogador = jogo.personagem
    if(jogador.vida<=0){
        jogador.vida=0
        atualizar()
        window.alert("vida zerada, descanse")
        return
    }
    else if (orc.vida <= 0) {
        orc.vida = 0
        jogador.dinheiro += 50
        btn3.style.display = "none"
        texto.innerHTML = "Inimigo derrotado"
        setTimeout(() => {
            texto.innerHTML = ""
            nivel2.style.display = "none"
        }, 3000);
        setTimeout(() => {
            document.body.classList.add("efeito1")
        }, 3000);
        setTimeout(() => {
            document.body.classList.remove("efeito1")
            document.body.classList.add("efeito2")
        }, 4000);
        setTimeout(() => {
            document.body.classList.remove("efeito2")
            document.body.classList.add("efeito3")
            const final=document.querySelector(".final")
            final.style.display="inline-block"
        }, 6000);
    }
    else{
        orc.vida -= jogador.ataque
        jogador.vida -= orc.ataque
        atualizar()
    }
}

function descansar(){
    const jogador=jogo.personagem
    const dragao=jogo.inimigos.dragao
    if(jogador.vida===100){
        window.alert("vida maxima atingida")
        return
    }
    else{
        dragao.ataque+=1
        jogador.vida=100
        atualizar()
    }
}
function treinar(){
    const jogador=jogo.personagem
    const dragao=jogo.inimigos.dragao
    jogador.ataque+=2
    jogador.vida-=2
    dragao.ataque+=1
    if(jogador.ataque>=999){
        jogador.ataque=999
        window.alert("maximo de ataque atingido")
        return
    }
    else if(jogador.vida<=0){
        window.alert("Sua vida zerou, descanse")
        jogador.vida=0
        atualizar()
        return
    }
    atualizar()
}

function atacarf(){
    const dragao=jogo.inimigos.dragao
    const jogador=jogo.personagem
    if(jogador.vida<=0){
        jogador.vida=0
        window.alert("Descanse")
        atualizar()
        return
    }
    else if(dragao.vida<=0){
        dragao.vida=0
        window.location.href="https://silvineey.github.io/portifolio/"
        atualizar()
    }
    else{
        dragao.vida-=jogador.ataque
        jogador.vida-=dragao.ataque
        atualizar()
    }
    atualizar()
}