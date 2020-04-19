const axios=require('axios').default;


export default {

    login: (email,password) => {
        return axios.post('http://51.178.54.198:8181/gpe/authen/login_particular',{
            email,
            password
        }).then((res) => {
            return res;
        }).catch((error) => {
            return error;
        });
    },

    registerParticular: (
        particularName, 
        particularFirstName, 
        particularEmail, 
        particularPassword, 
        particularPhonenumber, 
        particularLocation
    ) => {
        return axios.post('http://51.178.54.198:8181/gpe/particular/create_particular',{
            particularName, 
            particularFirstName, 
            particularEmail,
            particularPassword, 
            particularPhonenumber,
            particularLocation
        }).then((res)=>{
            return res;
        })
    },

    registerAssociation: (
        organizationName, 
        organizationMatricule,
        organizationChiefName, 
        organizationChiefFirstname, 
        organizationEmail, 
        organizationPassword, 
        organizationPhoneNumber, 
        organizationLocation, 
        organizationLogo,
        organizationDescription, 
        organizationWebSite,
        organizationCreationDate
    ) => {
        return axios.post('http://51.178.54.198:8181/gpe/organization/create_organization',{
            organizationName, 
            organizationChiefName,// good
            organizationChiefFirstname,
            organizationEmail, //good
            organizationPassword,// good
            organizationPhoneNumber, //good
            organizationLocation, //good
            organizationMatricule,

            organizationLogo,
            organizationDescription, // responsable prénom
            organizationWebSite,
            organizationCreationDate
        }).then((res)=>{
            return res;
        })
    }
}