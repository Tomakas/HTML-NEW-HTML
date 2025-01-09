// js/user.js

/**
 * Načte seznam uživatelů z localStorage.
 * @returns {Array} - Pole uživatelských jmen.
 */
export function loadUsers() {
  const users = localStorage.getItem('users');
  return users ? JSON.parse(users) : [];
}

/**
* Přidá nového uživatele do localStorage.
* @param {string} username - Uživatelské jméno.
*/
export function addUser(username) {
  const users = loadUsers();
  if (!users.includes(username)) {
      users.push(username);
      localStorage.setItem('users', JSON.stringify(users));

      // Inicializace statistik pro nového uživatele
      const userData = {
          statistics: {}
          // Přidejte další atributy dle potřeby
      };
      localStorage.setItem(`user_${username}`, JSON.stringify(userData));
  }
}

/**
* Nastaví aktuálního uživatele.
* @param {string} username - Uživatelské jméno.
*/
export function setCurrentUser(username) {
  localStorage.setItem('currentUser', username);
}

/**
* Získá aktuálního uživatele.
* @returns {string|null} - Uživatelské jméno nebo null, pokud není nastaven.
*/
export function getCurrentUser() {
  return localStorage.getItem('currentUser');
}

/**
* Odhlásí aktuálního uživatele.
*/
export function logoutUser() {
  localStorage.removeItem('currentUser');
}
