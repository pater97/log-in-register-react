const functionUtils = {
    // funzione per validare email
    checkValidEmail(email) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
            return true
        return false
    },
    
    //funzione per validare nome, cognome e password
    checkValidString(string){
        if(string.length > 0)
            return true
        return false
    },
    
    //funzione per verificare il match delle password
    checkValidPassword(psw1, psw2){
        if(psw1 === psw2)
            return true
        return false
    },

    //funzione per verificare la lunghezza del numero di telefono inserito
    checkValidTelephone(telephoneNumber){
        if(telephoneNumber.length === 10)
            return true
        return false
    }
}

export default functionUtils