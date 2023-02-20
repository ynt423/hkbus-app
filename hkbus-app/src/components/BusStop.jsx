import React from "react";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import ListGroup from "react-bootstrap/ListGroup";

const BusStop = ({ busStopList }) => {
  return (
    <div>
      <ListGroup as="ol" numbered>
        {busStopList.map((n) => (
          <ListGroup.Item as="li">{n}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default BusStop;
