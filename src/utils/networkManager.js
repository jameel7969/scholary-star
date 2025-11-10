import handleResponse from "./responseHandler";
import { getToken } from "./token";

const BASE = import.meta.env.VITE_API_BASE_URL || "";

function buildHeaders(extra = {}) {
  const token = getToken();
  const headers = {
    "Content-Type": "application/json",
    ...extra,
  };
  if (token) headers["Authorization"] = `Bearer ${token}`;
  return headers;
}

export async function post(url, body = {}, opts = {}) {
  const res = await fetch(BASE + url, {
    method: "POST",
    headers: buildHeaders(opts.headers),
    body: JSON.stringify(body),
    credentials: opts.credentials || "same-origin",
  });
  return handleResponse(res);
}

export async function get(url, opts = {}) {
  const res = await fetch(BASE + url, {
    method: "GET",
    headers: buildHeaders(opts.headers),
    credentials: opts.credentials || "same-origin",
  });
  return handleResponse(res);
}

export default { post, get };
