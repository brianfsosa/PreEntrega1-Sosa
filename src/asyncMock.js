import espadaDeFuegoImg from '../src/assets/images/espada-de-fuego.jfif';
import armaduraDePlataImg from '../src/assets/images/armadura-de-plata.jfif';
import pocionDeCuracionImg from '../src/assets/images/pocion-de-curacion.jfif';
import varitaDeRelampagosImg from '../src/assets/images/varita-de-relampagos.jfif';
import dragonDeMascotaImg from '../src/assets/images/dragon-de-mascota.jfif';
import escudoDePiedraImg from '../src/assets/images/escudo-de-piedra.jfif';
import dagaEnvenenadaImg from '../src/assets/images/daga-envenenada.jfif';
import amuletoDeProteccionImg from '../src/assets/images/amuleto-de-proteccion.jfif';
import familiarDeLoboImg from '../src/assets/images/familiar-de-lobo.jfif';
import tunicaDeMagoImg from '../src/assets/images/tunica-de-mago.jfif';
import martilloDeGuerraImg from '../src/assets/images/martillo-de-guerra.jfif';
import pocionDeVelocidadImg from '../src/assets/images/pocion-de-velocidad.jfif';
import arcoElficoImg from '../src/assets/images/arco-elfico.jfif';
import anilloDeInvisibilidadImg from '../src/assets/images/anillo-de-invisibilidad.jfif';
import grimorioAntiguoImg from '../src/assets/images/grimorio-antiguo.jfif';

const products = [
  {
    nombre: "Espada de fuego",
    codigo: "1",
    precio: 50,
    categoria: "armas",
    img: espadaDeFuegoImg,
    descripcion: "Una espada imbuida con el poder del fuego para infligir daño adicional.",
  },
  {
    nombre: "Armadura de plata",
    codigo: "2",
    precio: 100,
    categoria: "armadura",
    img: armaduraDePlataImg,
    descripcion: "Una armadura hecha de plata resistente que proporciona una excelente protección.",
  },
  {
    nombre: "Poción de curación",
    codigo: "3",
    precio: 10,
    categoria: "consumibles",
    img: pocionDeCuracionImg,
    descripcion: "Una poción mágica que restaura una cantidad moderada de puntos de vida.",
  },
  {
    nombre: "Varita de relámpagos",
    codigo: "18",
    precio: 80,
    categoria: "armas",
    img: varitaDeRelampagosImg,
    descripcion: "Una varita mágica que lanza poderosos rayos de relámpagos a los enemigos.",
  },
  {
    nombre: "Dragón de mascota",
    codigo: "19",
    precio: 150,
    categoria: "mascota",
    img: dragonDeMascotaImg,
    descripcion: "Un compañero leal en forma de dragón que puede volar y atacar a tus enemigos.",
  },
  {
    nombre: "Escudo de piedra",
    codigo: "4",
    precio: 30,
    categoria: "armadura",
    img: escudoDePiedraImg,
    descripcion: "Un escudo resistente hecho de piedra para bloquear los ataques enemigos.",
  },
  {
    nombre: "Daga envenenada",
    codigo: "5",
    precio: 25,
    categoria: "armas",
    img: dagaEnvenenadaImg,
    descripcion: "Una daga con una hoja envenenada que causa daño adicional por veneno.",
  },
  {
    nombre: "Amuleto de protección",
    codigo: "6",
    precio: 50,
    categoria: "armadura",
    img: amuletoDeProteccionImg,
    descripcion: "Un amuleto mágico que aumenta la defensa del jugador contra los ataques enemigos.",
  },
  {
    nombre: "Familiar de lobo",
    codigo: "7",
    precio: 80,
    categoria: "mascota",
    img: familiarDeLoboImg,
    descripcion: "Un lobo leal que lucha junto al jugador y mejora sus habilidades de rastreo.",
  },
  {
    nombre: "Túnica de mago",
    codigo: "8",
    precio: 70,
    categoria: "armadura",
    img: tunicaDeMagoImg,
    descripcion: "Una túnica de mago hecha de tela especial que aumenta el poder mágico.",
  },
  {
    nombre: "Martillo de guerra",
    codigo: "9",
    precio: 55,
    categoria: "armas",
    img: martilloDeGuerraImg,
    descripcion: "Un martillo pesado y poderoso que causa un gran daño de golpe.",
  },
  {
    nombre: "Poción de velocidad",
    codigo: "10",
    precio: 15,
    categoria: "consumibles",
    img: pocionDeVelocidadImg,
    descripcion: "Una poción mágica que otorga un aumento temporal en la velocidad del jugador.",
  },
  {
    nombre: "Arco élfico",
    codigo: "11",
    precio: 65,
    categoria: "armas",
    img: arcoElficoImg,
    descripcion: "Un arco elegante y preciso hecho por los maestros arqueros élficos.",
  },
  {
    nombre: "Anillo de invisibilidad",
    codigo: "12",
    precio: 120,
    categoria: "armadura",
    img: anilloDeInvisibilidadImg,
    descripcion: "Un anillo que otorga la habilidad de volverse invisible durante un corto período de tiempo.",
  },
  {
    nombre: "Grimorio antiguo",
    codigo: "13",
    precio: 90,
    categoria: "arma",
    img: grimorioAntiguoImg,
    descripcion: "Un libro mágico lleno de hechizos antiguos y conocimientos arcanos.",
  }
];


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