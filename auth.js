import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// signin code

firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
    console.log("Done")
}).catch((error) => {
    if(error.code === 'auth/wrong-password'){
        console.log(error.code)
    } else if(error.code === 'auth/user-not-found'){
        // TODO : you can create a new account.
    }
})

// signup code

firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
    const id = firebase.auth().currentUser.uid
    firebase.firestore().collection('Users38493884').doc(id).set({
        email: email,
        username: username,
        ca: ca, // this is for user selecting whether they are consumer or creater
        id: id,
        created: Date.now(),
        // We wont be uploading password  into the db to protect user data
    }).then(() => {
        console.log("Done")
    })
}).catch((error) => {
    if(error.code === 'auth/email-already-in-use'){
        // TODO : If here then it means account already exists...
    }
})

// forgotten password

firebase.auth().sendPasswordResetEmail(this.state.email).then(() => {
    console.log("Done")
})