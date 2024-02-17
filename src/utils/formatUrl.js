export default function formatUrl(params) {
  const url = `${Object.keys(params).map(
    (key) => params[key] && `${key}=${params[key]}`
  )}`.replace(',', '&');

  const formattedUrl = url.endsWith('&') ? url.slice(0,-1) : url;

  const result = formattedUrl.startsWith('&') ? formattedUrl.slice(1) : formattedUrl;

  return result;
}