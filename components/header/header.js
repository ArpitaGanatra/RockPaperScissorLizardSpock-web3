import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../../styles/Home.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <ConnectButton />
    </div>
  );
};

export default Header;
