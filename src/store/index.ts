import { createStore } from 'vuex'

export default createStore({
  state: {
    peersona: [
      {
        id: 1,
        idTipoPersona: 1,
        nombre: "emmanuel",
        apellido: "renteria",
        telefono: "3333333",
        correo: "akakak@gamil.com",
        clave: ""
      },
      {
        id: 2,
        idTipoPersona: 1,
        nombre: "maria",
        apellido: "perez",
        telefono: "3333333",
        correo: "akakak@gamil.com",
        clave: ""
      },
      {
        id: 2,
        idTipoPersona: 2,
        nombre: "juanita",
        apellido: "perez",
        telefono: "3333333",
        correo: "dddd@gamil.com",
        clave: "hola"
      }
    ],
    tipiPersona: [
      {
        id: 1,
        nombre: "cliente",
        descripcion:"esta persona solo puede hjacer compras"
      },
      {
        id: 2,
        nombre: "empleado",
        descripcion:"esta persona solo puede hjacer compras"
      }
    ],
    produsctos: [
      {
        id: 1,
        nombre: "arraz",
        marca: "roa",
        precio: 200,
        cantidad: 20,
        unidadMedida: "lb",
        descripcion: "arroz por bultos"
      }
    ],
    factura: [
      {
        id: 1,
        idTipoPersona: 1,
        productosElegidos: [
          {
            idProducto: 1,
            cantidad: 3
          }
        ],
        totalCompra: 1000,
      }
    ]
  },
  getters: {
    consulta(state){
      state.peersona.forEach(element => {
        console.log(element.nombre)
      });
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
