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
export { getProducts,getProductById, createOrder, getOrder, getProductsByCategory}
