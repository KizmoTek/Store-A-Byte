var firebaseConfig = {
	apiKey: "AIzaSyAzI4irPRxcI8zNCdz980szVpHV_uvLVi0",
	authDomain: "store-a-byte.firebaseapp.com",
	databaseURL: "https://store-a-byte.firebaseio.com",
	projectId: "store-a-byte",
	storageBucket: "gs://store-a-byte.appspot.com/",
	messagingSenderId: "909604223499",
	appId: "1:909604223499:web:aed92c7863f43569"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var defaultStorage = firebase.storage();
var database = firebase.database();