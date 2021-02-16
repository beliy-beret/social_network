import Axios from 'axios';

const instance = Axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': '76db2216-53ec-4a83-b02f-40c01c6b810e'},
});

export const getUsers = (currentPage, pageSize) => {
    return (
        instance.get(`users?page=${currentPage}&count=${pageSize}`)        
        .then(response => response.data)        
    )
};

export const subscriptionAPI = {
    subs (id) {
        return(
            instance.post(`follow/${id}`)
            .then(response => response.data)
        )
    },
    unsub (id) {
        return(
            instance.delete(`follow/${id}`)
            .then(response => response.data)
        )
    },
};

export const aboutMe = () => {
    return(
        instance.get(`auth/me`)
    )
};

export const userProfileAPI = {
    profileInfo (id) {
        return(
            instance.get(`profile/${id}`)
            .then(response => response.data)
        )
    },
    userStatus (id) {
        return(
            instance.get(`profile/status/${id}`)
            .then( response => response.data)
        )
    },
    updateStatus (status) {
        return instance.put(`profile/status`, { status })
    },
    authorization (email, password, rememberMe, captcha = null) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})            
    },    
    logout () {
        return instance.delete(`auth/login`)        
    },
    replacePhoto (file) {
        const formData = new FormData();
        formData.append("image", file );
        return (
            instance.put(`profile/photo`, formData)
        )
    }
};

export const securityAPI = {
    getCaptchaURL () {
        return instance.get(`security/get-captcha-url`)
    }
}
