const axios=require('axios').default;


export default {

    login: (email,password) => {
        return axios.post('http://localhost:3000/login', {
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
        return axios.post('https://backend.hand-me.fr:8443/gpe/particular/create_particular',{
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
        organizationDescription="fake description", 
        organizationWebSite,
        organizationCreationDate
    ) => {
        return axios.post('https://backend.hand-me.fr:8443/gpe/organization/create_organization',{
            organizationName, 
            organizationChiefName,
            organizationChiefFirstname,
            organizationEmail,
            organizationPassword,
            organizationPhoneNumber,
            organizationLocation, 
            organizationMatricule,
            organizationLogo,
            organizationDescription,
            organizationWebSite,
            organizationCreationDate
        }).then((res)=>{
            return res;
        })
    }
}
