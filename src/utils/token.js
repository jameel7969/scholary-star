const KEY = "auth_token";

export function setToken(token) {
  if (!token) return;
  try {
    localStorage.setItem(KEY, token);
  } catch (e) {
    // ignore storage errors
  }
}

export function getToken() {
  try {
    return localStorage.getItem(KEY);
  } catch (e) {
    return null;
  }
}

export function removeToken() {
  try {
    localStorage.removeItem(KEY);
  } catch (e) {
    // ignore
  }
}

export default { setToken, getToken, removeToken };
