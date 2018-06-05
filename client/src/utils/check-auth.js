const API_URL = window.location.host.includes('localhost') ? 'http://localhost:3001' : 'https://stormy-dusk-49537.herokuapp.com';

export function checkAuth() {
    const token = localStorage.getItem('id_token');
    const userData = localStorage.getItem('user');
    const pathname = window.location.pathname;

    const unauthedRoutes = [
        '/dashboard',
    ];

    if (!unauthedRoutes.includes(pathname)) {
        return false;
    }

    if (token === null || userData === null) {
        localStorage.removeItem('id_token');
        localStorage.removeItem('user');
        return window.location.href = '/login';
    } else {
        fetch(`${API_URL}/api/hb`, {
            headers: new Headers({'Authorization': `Bearer ${token}`})
        }).then(response => {
            return response.json()
        }).then(data => {
            if (data.statusCode === 401) {
                localStorage.removeItem('id_token');
                localStorage.removeItem('user');
                return window.location.href = '/login';
            } else {
                return false;
            }
        }).catch(err => {
            console.log('error', err);
        });
        
    }
}