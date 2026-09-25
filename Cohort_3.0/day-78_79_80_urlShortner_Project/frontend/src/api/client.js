import axios from "axios";

const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL || "https://shortly-url-short.onrender.com/api",
  timeout: 8000,
});

export async function fetchLinks() {
  const { data } = await api.get("/url");
  return data?.data ?? [];
}

export async function createShortLink(url) {
  const { data } = await api.post("/url", { url });
  return data?.data ?? null;
}

export async function removeLink(id) {
  await api.delete(`/url/${id}`);
}