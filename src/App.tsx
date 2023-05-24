import React from "react";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  return (
    <div className="App">
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
