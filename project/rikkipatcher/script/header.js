

document.addEventListener('DOMContentLoaded', function() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
        });

    window.navigateTo = function(page) {
        window.location.href = page + '.html';
    };
});