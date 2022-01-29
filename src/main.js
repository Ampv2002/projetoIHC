import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import firebase from 'firebase';


Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')


// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAho-n2UQRST_CZ3KnVlUH1xt4TqhsnkzI",
  authDomain: "projetoihc-f0990.firebaseapp.com",
  databaseURL: "https://projetoihc-f0990-default-rtdb.firebaseio.com",
  projectId: "projetoihc-f0990",
  storageBucket: "projetoihc-f0990.appspot.com",
  messagingSenderId: "129208904795",
  appId: "1:129208904795:web:c28ad09c687a49e633237e",
  measurementId: "G-NK9TQL6PJ3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
