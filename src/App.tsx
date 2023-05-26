import React from "react";
import Button from "./components/Button";
import Alert from "./components/Alert";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";

function App() {
  return (
    <div className="App">
      <Menu
        defaultIndex={"0"}
        mode="vertical"
        onSelect={(index) => {
          alert(index);
        }}
        defaultOpenSubMenus={["2"]}
      >
        <MenuItem index={"0"}>lalala1</MenuItem>
        <MenuItem index={"1"} disabled>
          lalala2
        </MenuItem>
        <SubMenu title="dropdown">
          <MenuItem>dropdown 1</MenuItem>
          <MenuItem>dropdown 2</MenuItem>
        </SubMenu>
        <MenuItem index={"2"}>lalala3</MenuItem>
      </Menu>
      <Button btnType="primary" size="lg">
        primary large
      </Button>
      <Button btnType="primary" size="sm">
        primary small
      </Button>
      <Button btnType="default">default</Button>
      <Button btnType="danger">danger</Button>
      <Button disabled>default</Button>
      <Button btnType="link" href="www.google.com">
        link
      </Button>
      <Button btnType="link" href="www.google.com" disabled>
        link disabled
      </Button>
      <Alert
        title="test alert"
        description="this is desc"
        type="success"
        closable={false}
      />
      <Alert title="test alert" type="default" />
      <Alert title="test alert" type="danger" />
      <Alert title="test alert" type="warning" />
    </div>
  );
}

export default App;
