import React from "react";
import { Link } from "react-router-dom";

function BookmarkedItems(props) {
  console.log("PROPS: ", props.location.state);
  const items = props.location.state;
  return (
    <div>
      <h3>Bookmarked Items are:</h3>
      <ul>
        {items.map((item) => {
          if (item.itemPurchases > 0) {
            return (
              <li style={{ listStyle: "none" }}>
                {item.itemPurchases > 1 ? (
                  <div>
                    {" "}
                    {item.itemPurchases} {item.itemName}s{" "}
                  </div>
                ) : (
                  <div>
                    {" "}
                    {item.itemPurchases} {item.itemName}{" "}
                  </div>
                )}
              </li>
            );
          }
        })}
      </ul>
      <Link to="/">
        <button>Cancel order</button>
      </Link>
    </div>
  );
}

export default BookmarkedItems;
