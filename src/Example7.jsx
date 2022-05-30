import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
// import "antd/dist/antd.css";
import { Button, Card } from "@mui/material";
import debounce from 'lodash/debounce';
import Typography from "@mui/material/Typography";

const Portal = ({ children }) => {
  const mount = document.getElementById("portal-root");
  const el = document.createElement("div");

  useEffect(() => {
    mount.appendChild(el);
    return () => mount.removeChild(el);
  }, [el, mount]);

  return createPortal(children, el);
};

const TooltipPopover = ({ children, coords, updateTooltipCoords }) => {
  const updateCoords = debounce(updateTooltipCoords, 100);

  useEffect(() => {
    window.addEventListener("resize", updateCoords);
    return () => window.removeEventListener("resize", updateCoords);
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        width: 200,
        transform: "translate(-100px, -100%)",
        padding: '20px',
        color: 'white',
        border: '1px solid white',
        background: '#282c34',
        ...coords
      }}
      className="ant-popover ant-popover-placement-top"
    >
      <div className="ant-popover-content">
        <div className="ant-popover-arrow" />
        <div className="ant-popover-inner" role="tooltip">
          <div>
            <Typography variant="p" className="ant-popover-title">Title</Typography>
            <div className="ant-popover-inner-content">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const btnRef = React.createRef();
export const Example7 = () => {
  const [isOn, setOn] = useState(false);
  const [coords, setCoords] = useState({});

  const updateTooltipCoords = button => {
    const rect = button.getBoundingClientRect();
    setCoords({
      left: rect.x + rect.width / 2,
      top: rect.y + window.scrollY
    });
  };

  return (
    <Card sx={{
      padding: '100px',
      maxWidth: 800,
      margin: "0 auto 300px",
      overflow: "hidden",
      border: '2px solid white'
    }}>
      <Button
        ref={btnRef}
        onClick={e => {
          updateTooltipCoords(e.target);
          setOn(!isOn);
        }}
      >
        Click me
      </Button>
      {isOn && (
        <Portal>
          <TooltipPopover
            coords={coords}
            updateTooltipCoords={() =>
              updateTooltipCoords(btnRef.current)
            }
          >
            <Typography variant="p">
              Awesome content that is never cut off by its parent container!
            </Typography>
          </TooltipPopover>
        </Portal>
      )}
    </Card>
  );
};
