const API_URL = window.location.host.includes('localhost') ? 'http://localhost:3001' : 'https://fast-atoll-10374.herokuapp.com';

export function submitLogin (credentials) {
    return fetch(`${API_URL}/api/users/authenticate`, {
        method: 'POST',
        body: JSON.stringify({email: credentials.email, password: credentials.password}),
    }).then(response => response.json());
}

export function createNewAccount (credentials) {
    return fetch(`${API_URL}/api/users`, {
        method: 'POST',
        body: JSON.stringify({email: credentials.email, password: credentials.password}),
    }).then(response => response.json());
}

export function fetchUsers () {
    const id_token = localStorage.getItem('id_token');
    return fetch(`${API_URL}/api/users`, {
        headers: new Headers({'Authorization': `Bearer ${id_token}`})
    }).then(response => response.json())
}

export function sendPasswordReset (credentials) {
    return {data: 'sent'};
    // return fetch(`${API_URL}/api/users`, {
    //     method: 'POST',
    //     body: JSON.stringify({email: credentials.email, password: credentials.password}),
    // }).then(response => response.json());
}