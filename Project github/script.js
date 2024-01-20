function fetchRepositories() {
    const username = document.getElementById('username').value;

    if (username.trim() === '') {
        alert('Please enter a GitHub username.');
        return;
    }

    const apiUrl = `https://api.github.com/users/${username}/repos`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayRepositories(data))
        .catch(error => console.error('Error fetching data:', error));
}

function displayRepositories(repositories) {
    const repositoriesList = document.getElementById('repositories-list');
    repositoriesList.innerHTML = '';

    if (repositories.length === 0) {
        repositoriesList.innerHTML = '<p>No repositories found.</p>';
        return;
    }

    const ul = document.createElement('ul');

    repositories.forEach(repo => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`;
        ul.appendChild(li);
    });

    repositoriesList.appendChild(ul);
}
