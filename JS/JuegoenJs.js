      const celeste = document.getElementById('celeste')
      const violeta = document.getElementById('violeta')
      const naranja = document.getElementById('naranja')
      const verde = document.getElementById('verde')
      const btnEmpezar = document.getElementById('btnEmpezar')
      const ULTIMO_NIVEL = 20
      
      class Juego {
        constructor() {
          this.inicializar()
          this.generarSecuencia()
          this.siguientenivel()
        }
        inicializar() {
          this.elegirColor =this.elegirColor.bind(this)
          this.siguientenivel = this.siguientenivel.bind(this)
          btnEmpezar.classList.add('hide')
          this.nivel=1
          this.colores={
            celeste,
            violeta,
            naranja,
            verde
          }
        }

        generarSecuencia() {
          this.secuencia =  new Array().fill(0).map(n => Math.floor(Math.random()*4) )
        }

        siguientenivel(){
          this.subnivel=0
          this.iluminarSecuencia()
          this.agregarEventosclik()
        }

        transformarNumeroColor(numero){
          switch (numero){
            case 0:
            return 'celeste'
            case 1:
            return 'violeta'
            case 2:
            return 'naranja'
            case 3:
            return 'verde'

          }
        }

        transformarColorANumero(color){
          switch (color){
            case 'celeste':
            return 0
            case 'violeta':
            return 1
            case 'naranja':
            return 2
            case 'verde':
            return 3
          }
        }

        iluminarSecuencia(){
          for(let i=0; i<this.nivel; i++ ){
           let color = this.transformarNumeroColor(this.secuencia[i])
           setTimeout( () => this.iluminarcolor(color),1000*i)
          }
        }

        iluminarcolor(color){
          this.colores[color].classList.add('light')
          setTimeout(()=> this.apagarcolor(color),355)
        }
        apagarcolor(color){
          this.colores[color].classList.remove('light')
        }

        agregarEventosclik(){
          this.colores.celeste.addEventListener('click',this.elegirColor)
          this.colores.violeta.addEventListener('click',this.elegirColor)
          this.colores.naranja.addEventListener('click',this.elegirColor)
          this.colores.verde.addEventListener('click',this.elegirColor)
        }

        eliminareventosClik(){
          this.colores.celeste.removeEventListener('click',this.elegirColor)
          this.colores.violeta.removeEventListener('click',this.elegirColor)
          this.colores.naranja.removeEventListener('click',this.elegirColor)
          this.colores.verde.removeEventListener('click',this.elegirColor)
        }

        elegirColor(ev){
          const NomColor = ev.target.dataset.color
          const NumColor= this.transformarColorANumero(NomColor)
          this.iluminarcolor(NomColor)
          if(NumColor=== this.secuencia[this.subnivel]){
            this.subnivel++
             this.eliminareventosClik() 
            if(this.subnivel === this.nivel){ 
              if(this.nivel === (ULTIMO_NIVEL+1)){
                //gano
              }else{
               setTimeout(this.siguientenivel,2000) 
              }
            }
          }else{//perdio}
        }

      }
    }

      function empezarJuego() {
        window.juego = new Juego()
      }