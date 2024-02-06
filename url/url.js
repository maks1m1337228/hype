const url = new URL('https://studentki.ru/teens')

function devidedUrl(url) {
    console.log(url.protocol)
    console.log(url.host)
    console.log(url.pathname);
}
devidedUrl(url)