const usuario = {
  nombre: "Juan",
  apellido: "Perez",
  dni: 98765432,
  //   nombreCompleto: function () {
  //     console.log(`El nombre completo es: ${this.nombre} ${this.apellido}`);
  //   },
  nombreCompleto(simbolo) {
    return `El nombre completo es: ${this.nombre} ${this.apellido} ${simbolo}`;
  },
};

const texto = usuario.nombreCompleto("!!!");
console.log(texto);

const usuarios = [usuario];
