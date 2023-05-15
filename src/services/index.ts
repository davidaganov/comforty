import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCgD2rWNAI-W8g2ixvtoUJWafwMYL_d4_0",
  authDomain: "comforty-a335a.firebaseapp.com",
  projectId: "comforty-a335a",
  storageBucket: "comforty-a335a.appspot.com",
  messagingSenderId: "991101322936",
  appId: "1:991101322936:web:37c51ee768be54dab0164d"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
