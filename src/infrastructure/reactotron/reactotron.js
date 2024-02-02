import { NativeModules } from "react-native";
import Reactotron from "reactotron-react-native";
import { reactotronRedux } from "reactotron-redux";
import url from "url";

let reactotron;
const { hostname } = url.parse(NativeModules.SourceCode.scriptURL);

reactotron = Reactotron.configure()
  .useReactNative({
    hostname,
    port: 9090
  })
  .use(reactotronRedux())
  .connect();

console.tron = Reactotron.log;


export { reactotron };