import { ColorInput } from "../../ColorInput";
import { DefaultColorSection } from "../DefaultColorSection";
import style from "./style.module.scss";

export const PrimarySection = () => {
  return (
    <DefaultColorSection>
      <ColorInput colorPriority={"primary"} colorWeight={100} />
      <ColorInput colorPriority={"primary"} colorWeight={200} />
      <ColorInput colorPriority={"primary"} colorWeight={300} />
      <ColorInput colorPriority={"primary"} colorWeight={400} />
    </DefaultColorSection>
  );
};
