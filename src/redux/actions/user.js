import { userApi } from '../../utils/api'

const actions = {
    setUserData: data => ({
        type: "USER:SET_DATA",
        payload: data
    }),
    setIsAuth: bool => ({
        type: 'USER:SET_IS_AUTH',
        payload: bool,
    }),
    fetchUserData: () => dispatch => {
        userApi
            .getMe()
            .then(({ data }) => {
                dispatch(actions.setUserData(data));
            })
            .catch(err => {
                if (err.response.status === 403) {
                    dispatch(actions.setIsAuth(false));
                    delete window.localStorage.token;
                }
            });
    },
    fetchUserExit: () => dispatch => {
        dispatch(actions.setIsAuth(false));
        delete window.localStorage.token;
    },
    fetchUserLogin: postData => dispatch => {
        return userApi.login(postData).then(({ data }) => {
            const { token } = data;

            window.localStorage['token'] = token;
            window.axios.defaults.headers.common["token"] = token;

            dispatch(actions.fetchUserData());
            dispatch(actions.setUserData(data));

            return data;
        }).catch(err => {

        })
    },
    fetchUserRegistr: postData => () => {
        return userApi.registr(postData);
    }
}

export default actions;