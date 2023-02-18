import React, { useState, useContext, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import BusInputContext from "./BusInputConext";

const SelectMenu = ({ data }) => {
  const businput = useContext(BusInputContext);
  const [busNoArr, setBusNoArr] = useState([]);
  const [buslength, setBuslength] = useState(0);
  const busNumberRendering = () => {
    console.log("Rendering busnum is working...");

    for (let i = 0; i < data.length; i++) {
      if (!busNoArr.includes(data[i].route)) {
        busNoArr.push(data[i].route);
        console.log("bus number has push into busNoArr");
        setBuslength(busNoArr.length);
      }
    }
  };

  useEffect(() => {
    busNumberRendering();
  }, [data]);

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      &#x25bc;
    </a>
  ));

  // forwardRef again here!
  // Dropdown needs access to the DOM of the Menu to measure it
  const CustomMenu = React.forwardRef(
    ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
      const [value, setValue] = useState("");

      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >
          <Form.Control
            autoFocus
            className="mx-3 my-2 w-auto"
            placeholder="Type to filter..."
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <ul className="list-unstyled">
            {React.Children.toArray(children).filter(
              (child) =>
                !value || child.props.children.toLowerCase().startsWith(value)
            )}
          </ul>
        </div>
      );
    }
  );
  return (
    <div length={buslength}>
      <Dropdown>
        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
          選擇路線
        </Dropdown.Toggle>

        <Dropdown.Menu className="dropdown-menu" as={CustomMenu}>
          {busNoArr.map((n) => (
            <DropdownItem onClick={() => businput.setBusInput(n)}>
              {n}
            </DropdownItem>
          ))}
          {/* <Dropdown.Item eventKey="1">Red</Dropdown.Item>
          <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
          <Dropdown.Item eventKey="3" active>
            Orange
          </Dropdown.Item>
          <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item> */}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default SelectMenu;
