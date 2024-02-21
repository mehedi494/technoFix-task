import Button from "../UI/Button";

export const data = [
  {
    Title: "Purchases and credits",
    Categories: "Sales",
    Price: "50",
    Date: "Jan 02,2024,11:21 AM",
    Author: "John",
    Status: "paid",
    Action: <Button actionName="Accept"></Button>,
  },
  {
    Title: "Big organisation",

    Categories: "Company",
    Price: "50",
    Date: "Jan 02,2024,11:21 AM",
    Author: "John",
    Status: "Cancelled",
    Action: <Button actionName="Decline"></Button>,
  },
  {
    Title: "Big organisation",

    Categories: "Programming",
    Price: "50",
    Date: "Jan 02,2024,11:21 AM",
    Author: "Y",
    Status: "Pending",
    Action: <Button actionName="Decline"></Button>,
  },
  {
    Title: "Database",

    Categories: "Book",
    Price: "50",
    Date: "Jan 02,2024,11:21 AM",
    Author: "X",
    Status: "verified",
    Action: <Button actionName="Accept"></Button>,
  },
];
