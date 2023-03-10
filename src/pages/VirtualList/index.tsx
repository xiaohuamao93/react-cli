import { useState } from "react";
import styles from "./styles/index.less";

const VirtualList = () => {
  const [num, setNumber] = useState(0);
  const handerClick = () => {
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        setNumber(num + 1);
        console.log(num);
      }, i * 1000);
    }
  };

  return (
    <div className={styles.wrap} onClick={handerClick}>
      首页{num}
    </div>
  );
};

export default VirtualList;
