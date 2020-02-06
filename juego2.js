function saludo(){
	alert("Hola Crack, Jefe, Genio, Tifon, Mastodonte, Titan, Numero Uno, Novato, Macho Alfa, Pecho Peludo, Lomo Plateado, Figura, Maquina, Heroe, Mostro, Animal, Máquina, Gigante, Artista, Caimán, Tiranosaurio, Superman, Prenda, Semental, Ninja, Tsunami, León, Terminator, Goliat, Terremoto, Tigre, Vaquero, Tanque, Mole, Samurai, Coloso, Paladin, WILLYREX, Lobezno, Velociraptor, Espectro, Vikingo, Godzilla, Caza de Combate, Campeón, Adamantium, Robocop, Zeus, Capitán, King Kong, Depredador, Tornado, Monster Truck, Coronel, Canallita, Champion, Chulazo, Truhan, Referente, Elemento, Maestro, Socio, Golfo, Valiente, Vividor, Brontosaurio, Maquinola")
}

function CambioEstilo(){
	document.getElementById('ociotitulo').style.fontSize='400%';
	document.getElementById('ociotitulo').style.color='lime';
	document.getElementById('ociotitulo').style.background='#1a1a1a';
	document.getElementById('ociotitulo').style.textAlign='center';
	document.getElementById('button').style.color='lime';
}

function AbrirJuego() {
        m = window.open("juego.html");
      }

function CerrarJuego() {
        m.close()
      }

function suma(){
	var suma;
	var x1=prompt("introduce un número:","");
	var x2=prompt("introduce un número:","");
	x1=parseInt(x1);
	x2=parseInt(x2);
	suma=x1+x2;
	alert(suma);
}

function juego2(){
	var x1=prompt("JUGADOR1:introduce un número:","");
	var x2=prompt("JUGADOR2:introduce un número:","");
	
	while (x1 != x2){
		if (x2<x1){
		document.write('<br>');
		document.write('El numero es mayor que el escrito');
		} else {
		document.write('<br>');
		document.write('El numero es menor que el escrito');
		}
		x2=prompt("JUGADOR2:introduce un número:","");
	}
	document.write('<br>');
	document.write("JUGADOR 2: ACERTASTE. Crack");
}