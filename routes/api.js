const express = require("express");
const router = express.Router();
const MyItem = require("../models/myItem");

router.get("/", (req, res) => {
  MyItem.find({})
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;

// HOW TO SAVE DUMMY DATA:

// const data = {
//   availableItems: [
//     {
//       itemName: "Laptop",
//       itemPrice: 900,
//       itemQuantity: 15,
//       itemURL: "https://cdn.mos.cms.futurecdn.net/6t8Zh249QiFmVnkQdCCtHK.jpg",
//     },
//     {
//       itemName: "Mobile",
//       itemPrice: 500,
//       itemQuantity: 13,
//       itemURL:
//         "https://img.etimg.com/thumb/width-640,height-480,imgsize-587039,resizemode-1,msid-71641818/industry/services/retail/ecommerce-may-soon-lose-mobile-exclusivity/getty.jpg",
//     },
//     {
//       itemName: "Playstation",
//       itemPrice: 400,
//       itemQuantity: 7,
//       itemURL:
//         "https://yt3.ggpht.com/a/AATXAJxC52kaeU_A1n4srk_ckbFHBZ-Q0uYcr7AiSGvNU1E=s900-c-k-c0xffffffff-no-rj-mo",
//     },
//     {
//       itemName: "Mouse",
//       itemPrice: 15,
//       itemQuantity: 30,
//       itemURL:
//         "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4xdwu?ver=4143&w=498&h=408&q=90&m=6&b=%23FFF0F0F0&f=jpg&o=f&p=0&aim=true",
//     },
//     {
//       itemName: "Keyboard",
//       itemPrice: 25,
//       itemQuantity: 21,
//       itemURL:
//         "https://media.wired.com/photos/5d4b068e35b3f90008fe37c1/125:94/w_2393,h_1800,c_limit/Gear-Mini-Keyboard-LightBlue.jpg",
//     },
//   ],
// };

// const newMyItem = new MyItem(data);

// newMyItem.save((error) => {
//   if (error) {
//     console.log("There is an error in saving data!");
//   } else {
//     console.log("Data has been saved to MongoDB!");
//   }
// });
