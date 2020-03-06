const inquirer = require ("inquirer");

let options = ["POST", "BID"];
let ebid = [];

function greatBay() {

     inquirer.prompt([
        {
            type:"list",
            message:"Would you like to [POST] an auction or [BID] on an auction?",
            choices: options,
            name: "options"
        }
    ])
    .then(function(data) {
        console.log(data);
        if (data.options === "POST") {
            inquirer.prompt([
                {
                    message: "What is the item you would like to submit?",
                    name: "submit"
                },
                {
                    message: "Whats category would you like to place your auction in?",
                    name: "item"
                }
            ]).then(function(extraData) {
                let newPost = new Post(data.options, extraData.submit, extraData.item);
                ebid.push(newPost);
            })
        } else if (data.role === "BID") {
            inquirer.prompt([
                {
                    type:"list",
                    choices:"",
                    message: "What auction would you like to place a bid in?",
                    name: "bid"
                },
                {
                    message: "How much would you like to bid?",
                    name: "cost"
                    
                }
            ]).then(function(extraData) {
              bid();
            })
        }
    })
}