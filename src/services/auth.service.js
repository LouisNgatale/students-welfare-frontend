import axios from 'axios';

const LOGIN_URL = 'http://localhost:8082/api/login/authenticate';
const REGISTER_URL = 'http://localhost:8081/api/registration/student';

class AuthService {
    login(user) {
        return axios
            .post(LOGIN_URL , {
                username: user.username,
                password: user.password
            })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem('user');
    }

    register(user) {
        return axios.post(REGISTER_URL , {
            fullName: user.fullName,
            registrationNumber: user.registrationNumber,
            phoneNumber: user.phoneNumber,
            password: user.password,
            level: user.level,
            course: user.course,
            yearOfStudy: user.yearOfStudy,
            gender: user.gender
        });
    }
}

export default new AuthService();