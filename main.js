

//const Humanos = new Object({
//    Saludar(){
//        return "Hola Humanos";
//    }
//});
//const obj = Humanos.__proto__;
//obj.constructor = {nombre: "Adrian", apellido: "Velasquez"};

//Humanos.__defineSetter__( 'setnombre',
//    function(p1){
//        obj.constructor.nombre = p1;
//    }
//)
//Humanos.__defineGetter__('getnombre',
//    function(){
//        return obj.constructor.nombre;
//    }
//)

//console.log(`Objetos \n`);
//console.log(Humanos);

const Animales = new Object({
    VerAnimales(){
        return `Animal: ${this.getanimal}, Raza: ${this.getraza}, Color : ${this.getcolor}`;
    }
});
const obj = Animales.__proto__;
obj.constructor = {Animal: "Angora", Raza: "Gato", Color: "Negro"};
Animales.__defineSetter__( 'setanimal',
    function(p1){
        obj.constructor.Animal = p1;
    }
)
Animales.__defineGetter__('getanimal',
    function(){
        return obj.constructor.Animal;
    }
)
Animales.__defineSetter__( 'setraza',
    function(p1){
        obj.constructor.Raza = p1;
    }
)
Animales.__defineGetter__('getraza',
    function(){
        return obj.constructor.Raza;
    }
)
Animales.__defineSetter__( 'setcolor',
    function(p1){
        obj.constructor.Color = p1;
    }
)
Animales.__defineGetter__('getcolor',
    function(){
        return obj.constructor.Color;
    }
)


console.log(Animales.VerAnimales());
Animales.setanimal = "Perro";
Animales.setraza = "Pincher";
Animales.setcolor = "Blanco";
console.log(Animales.VerAnimales());
console.log(Animales);