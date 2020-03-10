import React from "react";
import classes from "./AdminView.module.css";

const AdminView = props => {
  const goToOrdersHandler = () => {
    props.history.push("/OrdersToConfirm");
  };
  const goToViewsUsersHandler = () => {
    props.history.push("/UsersView");
  };
  return (
    <div className={classes.view}>
      <h2 className={classes.text}>Witaj szefie</h2>
      <button className={classes.btnOrders} onClick={goToOrdersHandler}>
        Zamowienia do potwierdzenia
      </button>
      <button className={classes.btnView} onClick={goToViewsUsersHandler}>
        Lista uzytkownikow
      </button>
    </div>
  );
};
export default AdminView;
