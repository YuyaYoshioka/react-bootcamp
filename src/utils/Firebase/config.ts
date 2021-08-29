import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC2xDweXHGSdtXyghsC4ymOCLk4Bgkj1Jc",
  authDomain: "react-bootcamp-89e75.firebaseapp.com",
  projectId: "react-bootcamp-89e75",
  storageBucket: "react-bootcamp-89e75.appspot.com",
  messagingSenderId: "748300740706",
  appId: "1:748300740706:web:b4cd89f7d4dc953698893b"
};

// firebaseパッケージをAPI Keyで初期化
// Firebaseコンソールで他アプリとReactを紐づける処理
firebase.initializeApp(firebaseConfig);

// 認証用のfirebaseモジュール
export const fireAuth = firebase.auth();

// ストレージ用のfirebaseモジュール
export const storage = firebase.storage();

// 初期化済みのfirebaseパッケージを確実に使用するためのexport defaultでfirebaseパッケージをexport
export default firebase;
