import React from "react";
import { useRouteError } from "react-router-dom";
import SectionLayout from "../../shared/UIElements/SectionLayout";
import styles from "./Error.module.css";
import MainNavigation from "../../shared/UIElements/mainNavigation/MainNavigation";

function Error() {
  const error = useRouteError();
  let title = "An error occured!";
  let message = "Something went wrong!";
  console.log(error);

  if (error.status === 404) {
    title = "Not found";
    message = "Could not find resource";
  }
  if (error.status === 429) {
    title = "An error occured!";
    message = "Too many request";
  }
  return (
    <>
      <MainNavigation />
      <SectionLayout className={styles.error}>
        <h1>{title}</h1>
        <p>{message}</p>
      </SectionLayout>
    </>
  );
}

export default Error;
