const products = [
    {
      nombre: "Espada de fuego",
      codigo: "1",
      precio: 50,
      categoria: "armas",
      descripcion: "Una espada imbuida con el poder del fuego para infligir daño adicional.",
    },
    {
      nombre: "Armadura de plata",
      codigo: "2",
      precio: 100,
      categoria: "armadura",
      descripcion: "Una armadura hecha de plata resistente que proporciona una excelente protección.",
    },
    {
      nombre: "Poción de curación",
      codigo: "3",
      precio: 10,
      categoria: "consumibles",
      descripcion: "Una poción mágica que restaura una cantidad moderada de puntos de vida.",
    },
    {
      nombre: "Varita de relámpagos",
      codigo: "18",
      precio: 80,
      categoria: "armas",
      descripcion: "Una varita mágica que lanza poderosos rayos de relámpagos a los enemigos.",
    },
    {
      nombre: "Dragón de mascota",
      codigo: "19",
      precio: 150,
      categoria: "mascota",
      descripcion: "Un compañero leal en forma de dragón que puede volar y atacar a tus enemigos.",
    },
    {
        nombre: "Escudo de piedra",
        codigo: "4",
        precio: 30,
        categoria: "armadura",
        descripcion: "Un escudo resistente hecho de piedra para bloquear los ataques enemigos.",
      },
      {
        nombre: "Daga envenenada",
        codigo: "5",
        precio: 25,
        categoria: "armas",
        descripcion: "Una daga con una hoja envenenada que causa daño adicional por veneno.",
      },
      {
        nombre: "Amuleto de protección",
        codigo: "6",
        precio: 50,
        categoria: "armadura",
        descripcion: "Un amuleto mágico que aumenta la defensa del jugador contra los ataques enemigos.",
      },
      {
        nombre: "Familiar de lobo",
        codigo: "7",
        precio: 80,
        categoria: "mascota",
        descripcion: "Un lobo leal que lucha junto al jugador y mejora sus habilidades de rastreo.",
      },
      {
        nombre: "Túnica de mago",
        codigo: "8",
        precio: 70,
        categoria: "armadura",
        descripcion: "Una túnica de mago hecha de tela especial que aumenta el poder mágico.",
      },
      {
        nombre: "Martillo de guerra",
        codigo: "9",
        precio: 55,
        categoria: "armas",
        descripcion: "Un martillo pesado y poderoso que causa un gran daño de golpe.",
      },
      {
        nombre: "Poción de velocidad",
        codigo: "10",
        precio: 15,
        categoria: "consumibles",
        descripcion: "Una poción mágica que otorga un aumento temporal en la velocidad del jugador.",
      },
      {
        nombre: "Arco élfico",
        codigo: "11",
        precio: 65,
        categoria: "armas",
        descripcion: "Un arco elegante y preciso hecho por los maestros arqueros élficos.",
      },
      {
        nombre: "Anillo de invisibilidad",
        codigo: "12",
        precio: 120,
        categoria: "armadura",
        descripcion: "Un anillo que otorga la habilidad de volverse invisible durante un corto período de tiempo.",
      },
      {
        nombre: "Grimorio antiguo",
        codigo: "13",
        precio: 90,
        categoria: "armadura",
        descripcion: "Un libro mágico lleno de hechizos antiguos y conocimientos arcanos.",
      }

  ]

  export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
  }

  export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.codigo === productId))
        }, 500)
    })
  }

  export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(products.filter(prod => prod.categoria === categoryId))
        },500)
    })
  }