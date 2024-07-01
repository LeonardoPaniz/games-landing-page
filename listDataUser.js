document.addEventListener('DOMContentLoaded', function() {
    const userTableBody = document.querySelector('#user-table tbody');
    const userData = JSON.parse(localStorage.getItem('user'));

    if (userData) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${userData.firstName}</td>
            <td>${userData.lastName}</td>
            <td>${userData.email}</td>
            <td>${userData.message}</td>
        `;
        userTableBody.appendChild(row);
    }
});