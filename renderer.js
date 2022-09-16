const searchButton = document.querySelector("#search-ipfs");
console.log('acaaa')


if (searchButton) {
  searchButton.addEventListener("click", () => {
    const ensDomain = document.querySelector(".ens-domain");
    console.log(ensDomain.value, 'ensDomain')
    console.log(search, 'renderer')
    //window.ipcRenderer.send("search", ensDomain.value);
    
    search.send( 'custom-endpoint', ensDomain.value )
  });
  /**
 * Sending messages to Main
 * `data` can be a boolean, number, string, object, or array
 */
}

console.log('testt')
