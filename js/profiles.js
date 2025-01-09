// /js/profiles.js

/**
 * Třída reprezentující profil uživatele.
 */
class Profile {
    constructor(username, avatar = 'fa-user-circle') {
        this.username = username;
        this.avatar = avatar;
        this.statistics = {}; // Můžete přidat další atributy podle potřeby
    }
}

/**
 * Načte všechny profily z localStorage.
 * @returns {Array} Pole objektů profilů.
 */
export function loadProfiles() {
    const profiles = localStorage.getItem('profiles');
    return profiles ? JSON.parse(profiles) : [];
}

/**
 * Uloží všechny profily do localStorage.
 * @param {Array} profiles - Pole objektů profilů.
 */
function saveProfiles(profiles) {
    localStorage.setItem('profiles', JSON.stringify(profiles));
}

/**
 * Vytvoří nový profil a uloží jej.
 * @param {string} username - Jméno nového profilu.
 * @param {string} avatar - Třída FontAwesome ikony pro avatar.
 * @returns {Profile|null} Nový profil nebo null, pokud už existuje.
 */
export function createProfile(username, avatar = 'fa-user-circle') {
    const profiles = loadProfiles();

    // Kontrola, zda již profil s daným jménem existuje
    if (profiles.find(profile => profile.username.toLowerCase() === username.toLowerCase())) {
        return null; // Profil již existuje
    }

    const newProfile = new Profile(username, avatar);
    profiles.push(newProfile);
    saveProfiles(profiles);
    return newProfile;
}

/**
 * Nastaví aktuálně aktivní profil.
 * @param {string} username - Jméno profilu, který má být aktivní.
 * @returns {boolean} True pokud se podařilo nastavit profil, jinak false.
 */
export function setCurrentProfile(username) {
    const profiles = loadProfiles();
    const profileExists = profiles.some(profile => profile.username === username);

    if (profileExists) {
        localStorage.setItem('currentProfile', username);
        return true;
    }
    return false;
}

/**
 * Získá aktuálně aktivní profil.
 * @returns {Profile|null} Aktuální profil nebo null, pokud žádný není nastaven.
 */
export function getCurrentProfile() {
    const currentUsername = localStorage.getItem('currentProfile');
    if (!currentUsername) return null;

    const profiles = loadProfiles();
    return profiles.find(profile => profile.username === currentUsername) || null;
}

/**
 * Odstraní profil.
 * @param {string} username - Jméno profilu k odstranění.
 * @returns {boolean} True pokud se podařilo odstranit profil, jinak false.
 */
export function deleteProfile(username) {
    let profiles = loadProfiles();
    const profileIndex = profiles.findIndex(profile => profile.username === username);

    if (profileIndex === -1) return false; // Profil neexistuje

    profiles.splice(profileIndex, 1);
    saveProfiles(profiles);

    // Pokud byl odstraněn aktuální profil, odstraňte jeho nastavení
    const currentUsername = localStorage.getItem('currentProfile');
    if (currentUsername === username) {
        localStorage.removeItem('currentProfile');
    }

    return true;
}
