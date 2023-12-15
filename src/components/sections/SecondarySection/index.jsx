import { ColorInput } from "../../ColorInput";
import { DefaultColorSection } from "../DefaultColorSection";

export const SecondarySection = () => {
  return (
    <DefaultColorSection>
      <ColorInput colorPriority={"secondary"} colorWeight={100} />
      <ColorInput colorPriority={"secondary"} colorWeight={200} />
      <ColorInput colorPriority={"secondary"} colorWeight={300} />
      <ColorInput colorPriority={"secondary"} colorWeight={400} />
    </DefaultColorSection>
  );
};
