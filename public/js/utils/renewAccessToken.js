const renewAccessToken = async function () {
    try {
        const res = await axios.post('http://localhost:8001/auth/refresh');
        const token = res.data.accessToken;
        sessionStorage.setItem('YOUR_ACCESS_TOKEN', token);
        console.log('Successfully renewed access token: ' + token);
        return token;
    }
    catch (err) {
        return null;
    }
};
export default renewAccessToken;
