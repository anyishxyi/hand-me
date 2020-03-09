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

    registerAssociation: (organizationName, organizationChiefName, organizationPassword, organizationLocation, organizationEmail, organizationLogo, organizationPhoneNumber, organizationDescription) => {
        return axios.post('http://51.178.54.198:8181/gpe/organization/create_organization',{
            organizationName, 
            organizationLogo, 
            organizationChiefName,
            organizationDescription, 
            organizationEmail,
            organizationPassword,
            organizationPhoneNumber,
            organizationLocation
        }).then((res)=>{
            return res;
        })
    }
}