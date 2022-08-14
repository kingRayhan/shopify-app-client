import { Context } from "@shopify/app-bridge-react";
import { useContext } from "react";

function MyFunctionalComponent() {
  const app = useContext(Context);
  if (app) {
    // Do something with App Bridge `app` instance...
    app.getState().then((state) => console.log(state));
  }

  return <span>Hello world!</span>;
}

const App = () => {
  return (
    <div>
      <h1>App</h1>
      <MyFunctionalComponent />
    </div>
  );
};

export default App;
