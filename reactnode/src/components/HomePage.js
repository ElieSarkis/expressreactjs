import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function HomePage() {
  useEffect(() => {
    axios
      .get("http://localhost:8000/")
      .then((req) => {
        const stateData = req.data[0].availableItems;
        console.log(req.data);
        setAllItems(stateData);
      })
      .catch((error) => console.log(error));
  }, []);

  const [allItems, setAllItems] = useState([]);
  const [sum, setSum] = useState();
  const AddItem = (item) => {
    if (item.itemPurchases < item.itemQuantity) {
      const elementsIndex = allItems.findIndex(
        (element) => element._id == item._id
      );
      console.log(elementsIndex);
      let newArray = [allItems];
      newArray[0][elementsIndex].itemPurchases = item.itemPurchases + 1;
      console.log("NEW ARRAY2: ", newArray[0]);
      setAllItems(newArray[0]);
      setRerender(rerender + 1);
    } else return;
    console.log("TOTAL PRICE: ", totalPrice);
    setSum(
      totalPrice.reduce(function (a, b) {
        return a + b;
      }, item.itemPrice)
    );

    console.log("SUM: ", sum);
  };

  const RemoveItem = (item) => {
    if (item.itemPurchases > 0) {
      const elementsIndexMinus = allItems.findIndex(
        (element) => element._id == item._id
      );
      console.log(elementsIndexMinus);
      let newArrayMinus = [allItems];
      newArrayMinus[0][elementsIndexMinus].itemPurchases =
        item.itemPurchases - 1;
      console.log("NEW ARRAY2: ", newArrayMinus[0]);
      setAllItems(newArrayMinus[0]);
      setRerender(rerender + 1);
    } else return;

    setSum(
      totalPrice.reduce(function (a, b) {
        return a + b;
      }, -item.itemPrice)
    );
  };

  const [rerender, setRerender] = useState(1);
  useEffect(() => {
    console.log("I AM RERENDERING!");
  }, [rerender]);

  const totalPrice = allItems.map((item) => {
    return item.itemPurchases * item.itemPrice;
  });

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Welcome to our application!</h1>
      <h3 style={{ textAlign: "center" }}>
        We have the following available items right now:
      </h3>
      <ul style={{ display: "flex", maringLeft: 0, paddingLeft: 0 }}>
        {allItems.map((element) => {
          console.log(element.itemPurchases);
          return (
            <li key={element._id} style={{ width: "20%", listStyle: "none" }}>
              <h4 style={{ textAlign: "center" }}>{element.itemName}</h4>
              <img
                style={{ padding: 10, paddingTop: 0, paddingBottom: 0 }}
                height="250"
                width="250"
                src={element.itemURL}
              />
              <div
                style={{
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  fontWeight: "bold",
                }}
              >
                <span>{element.itemQuantity} items left</span>
                <span>Price: {element.itemPrice}</span>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignSelf: "center",
                    marginTop: 5,
                  }}
                >
                  <button onClick={() => AddItem(element)}>Add</button>
                  <span
                    style={{
                      fontWeight: "bold",
                      marginRight: 5,
                      marginLeft: 5,
                    }}
                  >
                    {element.itemPurchases}
                  </span>
                  <button onClick={() => RemoveItem(element)}>Remove</button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      {sum > 0 && (
        <div>
          {" "}
          <h3>Your total price is: {sum} USD</h3>
          <Link
            to={{
              pathname: "/items",
              state: allItems,
            }}
          >
            <button>View your order</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default HomePage;
