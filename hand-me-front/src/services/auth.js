const axios=require('axios').default;


export default {

    login: (email,password) => {
        return axios.post('http://localhost:3000/login',{
            email,
            password
        }).then((res) => {
            return res;
        }).catch((error) => {
            return error;
        });
    },

    registerParticular: (name, firstName, email, password, phoneNumber, location) => {
        return axios.post('http://localhost:3000/create-particular',{
            name, 
            firstName, 
            email,
            password, 
            phoneNumber,
            location
        }).then((res)=>{
            return res;
        })
    },

    registerAssociation: (associationName, registerNumber, ownerName, ownerSurname, email, password, phoneNumber, location) => {
        return axios.post('http://localhost:3000/create-particular',{
            associationName, 
            registerNumber, 
            ownerName,
            ownerSurname, 
            email,
            password,
            phoneNumber,
            location
        }).then((res)=>{
            return res;
        })
    }
}