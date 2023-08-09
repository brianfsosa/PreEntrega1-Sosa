import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, addDoc, query, where } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCKl0tnXSTIEQE_mRqOrqIRJlxoGIjhUQY",
  authDomain: "coderhouse-react-store.firebaseapp.com",
  projectId: "coderhouse-react-store",
  storageBucket: "coderhouse-react-store.appspot.com",
  messagingSenderId: "823002272422",
  appId: "1:823002272422:web:d3250668a0339bd36d9a67"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

async function getProducts() {
    const productsRef = collection(db, 'products')
    const documentsSnapshot = await getDocs(productsRef)
    const documents = documentsSnapshot.docs
    const docsData = documents.map((item) => {
        return {...item.data(), id:item.id}
    })
    return docsData
}

async function getProductById(id) {
    const docRef = doc(db, 'products', id)
    const docSnapshot = await getDoc(docRef)

    if(docSnapshot.exists()){
        return {...docSnapshot.data(), id: docSnapshot.id }
    }else {
        throw new Error('El producto no existe')
    }
}

async function getProductsByCategory(cat) {
    const productsRef = collection(db, 'products')
    const res = query(productsRef, where('categoria','==', cat))
    const documentsSnapshot = await getDocs(res)
    const documents = documentsSnapshot.docs
    return documents.map((prod) => ({...prod.data(), id: prod.id}))
}

async function createOrder(orderData){
    const collectionRef = collection(db, "orders")
    const docCreated = await addDoc(collectionRef, orderData)
    return (docCreated.id)
}

async function getOrder(id) {
    const docRef = doc(db,"orders",id)
    const docSnapshot = await getDoc(docRef)
    return {...docSnapshot.data(), id: docSnapshot.id}
}

async function _exportProducts(){
    const productos = [
        {
          nombre: "Espada de fuego",
          id: "1",
          precio: 50,
          categoria: "armas",
          img: "/assets/images/espada-de-fuego.jfif",
          descripcion: "Una espada imbuida con el poder del fuego para infligir daño adicional.",
          stock:3
        },
        {
          nombre: "Armadura de plata",
          id: "2",
          precio: 100,
          categoria: "armadura",
          img: "/assets/images/armadura-de-plata.jfif",
          descripcion: "Una armadura hecha de plata resistente que proporciona una excelente protección.",
          stock:2
        },
        {
          nombre: "Poción de curación",
          id: "3",
          precio: 10,
          categoria: "consumibles",
          img: "/assets/images/pocion-de-curacion.jfif",
          descripcion: "Una poción mágica que restaura una cantidad moderada de puntos de vida.",
          stock:6
        },
        {
          nombre: "Varita de relámpagos",
          id: "18",
          precio: 80,
          categoria: "armas",
          img: "/assets/images/varita-de-relampagos.jfif",
          descripcion: "Una varita mágica que lanza poderosos rayos de relámpagos a los enemigos.",
          stock:7
        },
        {
          nombre: "Dragón de mascota",
          id: "19",
          precio: 150,
          categoria: "mascota",
          img: "/assets/images/dragon-de-mascota.jfif",
          descripcion: "Un compañero leal en forma de dragón que puede volar y atacar a tus enemigos.",
          stock:9
        },
        {
          nombre: "Escudo de piedra",
          id: "4",
          precio: 30,
          categoria: "armadura",
          img: "/assets/images/escudo-de-piedra.jfif",
          descripcion: "Un escudo resistente hecho de piedra para bloquear los ataques enemigos.",
          stock:35
        },
        {
          nombre: "Daga envenenada",
          id: "5",
          precio: 25,
          categoria: "armas",
          img: "/assets/images/daga-envenenada.jfif",
          descripcion: "Una daga con una hoja envenenada que causa daño adicional por veneno.",
          stock:8
        },
        {
          nombre: "Amuleto de protección",
          id: "6",
          precio: 50,
          categoria: "armadura",
          img: "/assets/images/amuleto-de-proteccion.jfif",
          descripcion: "Un amuleto mágico que aumenta la defensa del jugador contra los ataques enemigos.",
          stock:3
        },
        {
          nombre: "Familiar de lobo",
          id: "7",
          precio: 80,
          categoria: "mascota",
          img: "/assets/images/familiar-de-lobo.jfif",
          descripcion: "Un lobo leal que lucha junto al jugador y mejora sus habilidades de rastreo.",
          stock:6
        },
        {
          nombre: "Túnica de mago",
          id: "8",
          precio: 70,
          categoria: "armadura",
          img: "/assets/images/tunica-de-mago.jfif",
          descripcion: "Una túnica de mago hecha de tela especial que aumenta el poder mágico.",
          stock:2
        },
        {
          nombre: "Martillo de guerra",
          id: "9",
          precio: 55,
          categoria: "armas",
          img: "/assets/images/martillo-de-guerra.jfif",
          descripcion: "Un martillo pesado y poderoso que causa un gran daño de golpe.",
          stock:7
        },
        {
          nombre: "Poción de velocidad",
          id: "10",
          precio: 15,
          categoria: "consumibles",
          img: "/assets/images/pocion-de-velocidad.jfif",
          descripcion: "Una poción mágica que otorga un aumento temporal en la velocidad del jugador.",
          stock:15
        },
        {
          nombre: "Arco élfico",
          id: "11",
          precio: 65,
          categoria: "armas",
          img: "/assets/images/arco-elfico.jfif",
          descripcion: "Un arco elegante y preciso hecho por los maestros arqueros élficos.",
          stock:9
        },
        {
          nombre: "Anillo de invisibilidad",
          id: "12",
          precio: 120,
          categoria: "armadura",
          img: "/assets/images/anillo-de-invisibilidad.jfif",
          descripcion: "Un anillo que otorga la habilidad de volverse invisible durante un corto período de tiempo.",
          stock:1
        },
        {
          nombre: "Grimorio antiguo",
          id: "13",
          precio: 90,
          categoria: "arma",
          img: "/assets/images/grimorio-antiguo.jfif",
          descripcion: "Un libro mágico lleno de hechizos antiguos y conocimientos arcanos.",
          stock:3
        }
      ];

    for (let item of productos){
        const collectionRef = collection(db, 'products')
        const docCreated = await addDoc(collectionRef, item)
        console.log('creado ', docCreated.id)
    }
}

export { getProducts,getProductById, createOrder, getOrder, getProductsByCategory,_exportProducts }
