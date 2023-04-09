import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBYFRnxBhSHKppebqhWSSfM3IZgMhFP9pE",
  authDomain: "news-test-4fad2.firebaseapp.com",
  databaseURL: "https://news-test-4fad2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "news-test-4fad2",
  storageBucket: "news-test-4fad2.appspot.com",
  messagingSenderId: "57974720197",
  appId: "1:57974720197:web:e3ad893de97f19908a92ac"
};

export const app = initializeApp(firebaseConfig);