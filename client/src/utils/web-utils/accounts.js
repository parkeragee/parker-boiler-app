const API_URL = window.location.host.includes('localhost') ? 'http://localhost:3001' : 'https://fast-atoll-10374.herokuapp.com';

export function saveAcctInfo (acctInfo) {
    const id_token = localStorage.getItem('id_token');
    return fetch(`${API_URL}/api/accounts/create`, {
        headers: new Headers({'Authorization': `Bearer ${id_token}`}),
        method: 'POST',
        body: JSON.stringify(acctInfo),
    }).then(response => response.json());
}

export function fetchAccountInfo () {
    const id_token = localStorage.getItem('id_token');
    return fetch(`${API_URL}/api/accounts`, {
        headers: new Headers({'Authorization': `Bearer ${id_token}`})
    }).then(response => response.json());
}
