const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const mySchema = new Schema({
  availableItems: [
    {
      itemName: {
        type: String,
        required: true,
      },
      itemPrice: {
        type: Number,
        required: true,
      },
      itemQuantity: {
        type: String,
        required: true,
      },
    },
  ],
});

const MyItem = mongoose.model("MyItem", mySchema);
module.exports = MyItem;
