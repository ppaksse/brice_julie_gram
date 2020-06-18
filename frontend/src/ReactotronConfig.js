import Reactotron from "reactotron-react-js";
import { reactotronRedux } from "reactotron-redux";

 Reactotron.configure({ name: "Brice_julie_gram" })
  .use(reactotronRedux())
  .connect();

 export default Reactotron;