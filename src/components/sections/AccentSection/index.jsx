import { ColorInput } from "../../ColorInput";
import { DefaultColorSection } from "../DefaultColorSection";

export const AccentSection = () => {
  return (
    <DefaultColorSection>
        <ColorInput colorPriority={"accent"} colorWeight={1} />
        <ColorInput colorPriority={"accent"} colorWeight={2} />
        <ColorInput colorPriority={"accent"} colorWeight={3} />
        <ColorInput colorPriority={"accent"} colorWeight={4} />
    </DefaultColorSection>
  );
};
