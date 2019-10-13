/*!

=========================================================
* Argon Design System React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {  UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src: require("assets/img/fifa201.jpg"),
    altText: "",
    caption: "",
    header: ""
  },
];

class Carousel extends React.Component {
  render() {
    return (
      <>
        <UncontrolledCarousel items={items} />
      </>
    );
  }
}

export default Carousel;
