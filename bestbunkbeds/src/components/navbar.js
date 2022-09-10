import React from 'react';


const NavBar = () => {

  function popUp () {
    alert(`Best Bunk Beds would like to provide the most creative beds with highest quality. Our cutomized produects would meet all your needs. If you have any questioons, please call 800-000-111 or email customer@bestbunkbeds.com. We would like to accomendate all your needs!

    Once you made an order, we woould contact you asap to confirm the bed size and any customized details! We would also provide some rendering with the beds and your house to give you a general idea about how would the bed look like. Then we would sign a contract. Once the contract is confirmed, we will start the process to make the bed!`)
  }
  return (
  <nav className="nav">
    <a href="/" className="site-title">Best Bunk Beds</a>
     <ul>
       <li><a href="/login">Log In</a></li>
       <li><a href="/signup">Sign Up</a></li>
       <li><a onClick={popUp}>About</a></li>
       <li><a href="/cart">Shopping Cart</a></li>
     </ul>
  </nav>
  );
};

export default NavBar;