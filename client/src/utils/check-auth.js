const API_URL = window.location.host.includes('localhost') ? 'http://localhost:3001' : 'https://fast-atoll-10374.herokuapp.com';

export function checkAuth(history, props) {
    const token = localStorage.getItem('id_token');
    if (token === null) {
        localStorage.removeItem('id_token');
        localStorage.removeItem('user');
        return history.push('/');
    } else {
        fetch(`${API_URL}/api/hb`, {
            headers: new Headers({'Authorization': `Bearer ${token}`})
        }).then(response => {
            return response.json()
        }).then(data => {
            if (data.statusCode === 401) {
                localStorage.removeItem('id_token');
                localStorage.removeItem('user');
                return history.push('/');
            } else {
                return true;
            }
        }).catch(err => {
            console.log('error', err);
        });
        
    }
}