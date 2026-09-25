export const BASE_URL = (
  import.meta.env.VITE_BASE_URL || "https://shortly-url-short.onrender.com"
).replace(/\/$/, "");

const BASE62 =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export function generateShortCode(length = 6) {
  const CHARS = BASE62;
  return Array.from(
    { length },
    () => CHARS[Math.floor(Math.random() * CHARS.length)]
  ).join("");
}

export function formatNumber(value = 0) {
  return Number(value).toLocaleString("en-US");
}

export function timeAgo(date) {
  if (!date) return "just now";
  const seconds = Math.floor((Date.now() - new Date(date).getTime()) / 1000);
  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

export async function copyText(text) {
  if (navigator.clipboard?.writeText) {
    return navigator.clipboard.writeText(text);
  }
  const el = document.createElement("textarea");
  el.value = text;
  el.style.position = "fixed";
  el.style.opacity = "0";
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
}

export function normalizeUrl(raw) {
  const url = (raw || "").trim();
  if (!url) return "";
  return /^https?:\/\//i.test(url) ? url : `https://${url}`;
}

export function validateUrl(raw) {
  const value = (raw || "").trim();
  if (!value) return "Please enter a URL";
  if (value.length > 2048) return "URL is too long";
  const candidate = /^https?:\/\//i.test(value) ? value : `https://${value}`;
  try {
    const parsed = new URL(candidate);
    if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
      return "Please enter a valid URL starting with http:// or https://";
    }
    return candidate;
  } catch {
    return "Please enter a valid URL starting with http:// or https://";
  }
}

export function shortLink(code) {
  return `${BASE_URL}/${code}`;
}

export function daysAgo(days) {
  return new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString();
}

export const DEMO_LINKS = [
  {
    _id: "demo-1",
    shortCode: "8fK2pQ",
    originalUrl: "https://github.com/krishnacodes17",
    clicks: 599,
    createdAt: daysAgo(21),
  },
  {
    _id: "demo-2",
    shortCode: "xY9mBv",
    originalUrl: "https://www.youtube.com/",
    clicks: 845,
    createdAt: daysAgo(14),
  },
  

];