const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'fabul', 'babul', 'ebul', 'babul', 'gabul', 'abul', 'habul', 'dabul'];
//same naam ekadhik bar thakbe na
function removeDuplicate(names) {
    const unique = []; //er vitore unique gula thakbe
    for (let i = 0; i < names.length; i++) {
        const element = names[i];
        console.log(element);
    }

}

const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);
//shob name gula dekhte pabo