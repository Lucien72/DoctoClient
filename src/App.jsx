import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import{getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


console.log(import.meta.env.VITE_API_KEY)
console.log(import.meta.env.VITE_AUTH_DOMAIN)
console.log(import.meta.env.VITE_PROJECT_ID)
console.log(import.meta.env.VITE_STORAGE_BUCKET)
console.log(import.meta.env.VITE_MESSAGING_SENDER_ID)
console.log(import.meta.env.VITE_APP_ID)
console.log(import.meta.env.VITE_MEASUREMENT_ID)

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }
  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const login = () => {
    signInWithEmailAndPassword(auth, email, password).then(
      (UserResponse) => {
        const user = UserResponse.user;
        console.log(UserResponse)
      }
    ).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.errorMessage
    })
  }

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log('user : ', user)
      //user is signed, see doc for available properties
      console.log("login")
      const uid = user.uid;
    } else{
      //user is signed out
    }
  })

  const logout = () => {
    signOut(auth).then(() => {
      //sign out successful.
      console.log("logout")
    }).catch((error)=>{
      //an error happend
    })
  }


  return (
    <div>
      <h1>Connexion</h1>
      <div>
        <label htmlFor="email"></label>
        <input 
          type="text" 
          id="email" 
          name="email"
          onChange={handleChangeEmail}
        />
        <p></p>
        <label htmlFor="mdp"></label>
        <input 
          type="password" 
          id="mdp" 
          name="mdp"
          onChange={handleChangePassword}
        />
      </div>
      <p></p>
      <button onClick={() => login()}>Se connecter</button>
      <button onClick={() => logout()}>Se déconnecter</button>
    </div>
  )
}

export default App