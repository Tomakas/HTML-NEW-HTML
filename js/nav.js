function loadNavigation() {
    fetch('../nav.html')
      .then(response => response.text())
      .then(navContent => {
        document.getElementById('nav-placeholder').innerHTML = navContent;
      })
      .catch(error => console.error('Chyba při načítání navigace:', error));
  }
  
  document.addEventListener('DOMContentLoaded', loadNavigation);