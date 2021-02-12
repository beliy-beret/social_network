export const usersSelectors = {
    getUsers( state ) {
        return state.peoplePage.people         
    },
    pageSize (state) {
        return state.peoplePage.pageSize 
    },
    totalUsersCount (state) {
        return state.peoplePage.totalUsersCount
    },
    currentPage (state) {
        return state.peoplePage.currentPage
    },
    isFetching (state) {
        return state.peoplePage.isFetching
    },
    followingInProgress (state) {
        return state.peoplePage.followingInProgress
    }
}

export const headerSelectors = {
    isAuth (state) {
        return state.auth.isAuth
    },
    login (state) {
        return state.auth.login
    },
    photos (state) {
        return state.profilePage.profile.photos
    },
    isFetching (state) {
        return state.auth.isFetching
    }
}