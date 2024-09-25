import { DefaultColorSection } from "../DefaultColorSection";

export const SecondarySection = ({setSecondaryValues}) => {

  return (
    <DefaultColorSection setValues={setSecondaryValues} colorPrio={"secondary"} startColor={["#424242","#3d3d3d","#313131","#242424"]}>

    </DefaultColorSection>
  );
};
