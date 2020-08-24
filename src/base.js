import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDCfQLR9_TBQvLLNQzVMV1MO3655TOOKX4',
  authDomain: 'chatbox-app-d5146.firebaseapp.com',
  databaseURL: 'https://chatbox-app-d5146.firebaseio.com'
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base
