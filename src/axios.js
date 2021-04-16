import axios from "axios";

axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('user');

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
