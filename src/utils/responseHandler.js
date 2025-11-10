export async function handleResponse(response) {
  const text = await response.text();
  let data;
  try {
    data = text ? JSON.parse(text) : {};
  } catch (e) {
    data = { message: text };
  }

  if (!response.ok) {
    const error =
      (data && data.message) || response.statusText || "Request failed";
    const err = new Error(error);
    err.status = response.status;
    err.data = data;
    throw err;
  }

  return data;
}

export default handleResponse;
