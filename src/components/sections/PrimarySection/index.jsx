import { useEffect, useState } from "react";
import { ColorInput } from "../../ColorInput";
import { DefaultColorSection } from "../DefaultColorSection";
import style from "./style.module.scss";

export const PrimarySection = () => {




  // useEffect(() => {
  //   setInputItemsArray((prevArray) => {
  //     const copyArray = [...prevArray]
  //     if (copyArray.length < primaryAmount) {
  //       removeVariableItem()
  //     } else {

  //     }
  //   })
  // },[primaryAmount])

  // const inputItemsArray = Array.from({ length: primaryAmount }, (_, index) => {
  //   if (index === primaryAmount - 1) {
  //     return <ColorInput colorPriority={"primary"} colorWeight={`${index + 1}00`} isLast={true} addVariableItem={addVariableItem} />
  //   } else {
  //     return <ColorInput colorPriority={"primary"} colorWeight={`${index + 1}00`} />
  //   }
    
  // });
  

  return (
    <DefaultColorSection colorPrio={"primary"} startColor={["#33b3ae","#2c9c97","#258580","#1f706c"]}>
      {/* <ColorInput colorPriority={"primary"} colorWeight={100} />
      <ColorInput colorPriority={"primary"} colorWeight={200} />
      <ColorInput colorPriority={"primary"} colorWeight={300} /> */}
      {/* <ColorInput addVariableItem={addVariableItem} colorPriority={"primary"} colorWeight={400} isLast={true} /> */}
    </DefaultColorSection>
  );
};
