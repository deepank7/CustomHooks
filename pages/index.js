import Head from "next/head";
import ToggleComponent from "../comps/1-useToggle/ToggleComponent";
import TimeoutComponent from "../comps/2-useTimeout/TimeoutComponent";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <ToggleComponent />
      <br />
      <TimeoutComponent />
      <br />
    </>
  );
}
