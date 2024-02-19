
const generateUniqueId = (uniqueId) => {
    const timeStamp = Date.now();
    let random = Math.floor(Math.random() * 100000);
    return `${timeStamp}${random}`;
}
uniqueId = generateUniqueId();
console.log(uniqueId);