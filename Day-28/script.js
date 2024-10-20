


const message = new Promise (resolve => setTimeout(()=> resolve("A new message has been resolved"),3000));
const promiseMessage = async () => console.log(await message);
promiseMessage();

