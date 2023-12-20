import { useState } from "react";
import { ColorInput } from "../../ColorInput";
import { DefaultColorSection } from "../DefaultColorSection";

export const SecondarySection = ({setSecondaryValues}) => {

  return (
    <DefaultColorSection setValues={setSecondaryValues} colorPrio={"secondary"} startColor={["#424242","#3d3d3d","#313131","#242424"]}>

      {/* <ColorInput colorPriority={"secondary"} colorWeight={100} />
      <ColorInput colorPriority={"secondary"} colorWeight={200} />
      <ColorInput colorPriority={"secondary"} colorWeight={300} />
      <ColorInput addVariableItem={addVariableItem} colorPriority={"secondary"} colorWeight={400} isLast={true} /> */}
    </DefaultColorSection>
  );
};
