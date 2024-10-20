

const message = () => new Promise (resolve=>setTimeout(()=> resolve("Hello is returned after 3 second"),3000));
message().then(console.log);








