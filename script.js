document.addEventListener("DOMContentLoaded",
function(event) {
    getinfo('knva65');});

    function getinfo(login) {
fetch('https://api.github.com/users/' + login)
.then(response => response.json())
.then(user => {document.getElementById('login_user').innerHTML = user.login;
document.getElementById('picture').src = user.avatar_url;
document.getElementById('reposts').innerHTML = 'Количество репостов: ' + user.public_repos;

});
}



