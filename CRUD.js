//C - Create a new item for sale

//R - Retrieve all items availible for sale and their prices
function retrieveItem(){

    
}
//U - Update current bid on item

function bid() {
    console.log("Updating bid...\n");
    connection.query(
      "UPDATE items SET ? WHERE ?",
      [
        {
            current_bid: extraData.cost
        },
        {
            id: extraData.bid
        }
      ],
      function(err, res) {
        if (err) throw err;
        console.log(res.affectedRows + " products updated!\n");
      }
    );
  }
