import { useEffect, useState } from "react";
import { ColorInput } from "../../ColorInput";
import { DefaultColorSection } from "../DefaultColorSection";
import style from "./style.module.scss";

export const PrimarySection = ( {setPrimaryValues} ) => {  

  return (
    <DefaultColorSection setValues={setPrimaryValues} colorPrio={"primary"} startColor={["#33b3ae","#2c9c97","#258580","#1f706c"]}>
    </DefaultColorSection>
  );
};
