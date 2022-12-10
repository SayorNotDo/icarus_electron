const information = document.getElementById('info');
console.log(`Chrome (v${versions.chrome()}, Node.js (v${versions.node()}, Electron (v${versions.electron()})`)

const func = async () => {
    const response = await window.versions.ping();
    console.log(response);
}

func()