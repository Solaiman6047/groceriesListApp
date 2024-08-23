const prompt = require("prompt-sync")();
const fs = require('fs');

let groceriesList=[]
priceList=[]

let x=prompt("Enter items number: ")

for (let i=0;i<x;i++){
    let item=prompt("Enter item: ")
    let price=prompt("Enter price: ")
    let priceNumber = parseInt(price);
    priceList.push(priceNumber)
    groceriesList.push({
        item:item,
        price:price
    })
}

while (true){
    console.log("Enter action(add/remove/display list/total/save/exit)")
    let action = prompt()
    if (action === 'add'){
        let newitem = prompt("Enter item: ")
        let itsprice = prompt("Enter the price: ")
        priceList.push(itsprice)
        groceriesList.push({
            key:newitem,
            price:itsprice
        })
    }
    else if (action==='remove'){
        let removeditem=prompt("Enter item: ")
        let idx = groceriesList.findIndex(entry => entry.item === removeditem);
        if (idx !== -1){
            groceriesList=groceriesList.filter(entry => entry.item !== removeditem)
            console.log(groceriesList)
        }
        else{
            console.log("Can't find item")
        }
    }
    else if (action==='display list'){
        console.log(groceriesList)
    }
    else if (action==='total'){
        let total = priceList.reduce((acc, p) => {
            return acc+p
        });
        console.log(total)
    }
    else if (action==='save'){
        const content = JSON.stringify(groceriesList);

        fs.writeFile('myList.txt', content, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('List saved successfully.');
    });
    }
    else if (action==='exit'){
        break
    }
    else{
        console.log("Invalid input")
    }
}