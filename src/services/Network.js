const Network = async (url, method, body) => {
    const token = localStorage.getItem('token')

    return fetch(`http://192.168.0.10:3000/api/${url}${token != null ? `?access_token=${token}` : ''}`, {
        method: method || 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        body: body ? JSON.stringify(body) : null
    }).then((res) => res.json())
}

export default  Network
