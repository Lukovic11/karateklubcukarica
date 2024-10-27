// Test Component to show how to import and use scss module
// and also the usage of variables and mixing in scss
//To see the component on the page, import it in Homepage.jsx

import styles from "./TestComponent.module.scss";
import { H2_TEXT, H1_TEXT, P_TEXT } from "../../constants";

const TestComponent = () => {
  return (
    <div className={styles.test_component}>
      <h2 className={styles.karate_klub}>{H2_TEXT}</h2>
      <h1 className={styles.cukarica}>{H1_TEXT}</h1>
      <p>{P_TEXT}</p>
    </div>
  );
};

export default TestComponent;
