import { useEffect, useState } from "react";
import { ColorInput } from "../../ColorInput";
import { DefaultColorSection } from "../DefaultColorSection";


export const AccentSection = ( {theme, setAccentValues} ) => {
  const [colorArray, setColorArray] = useState(theme === "dark" ? ["#0c0c0c","#141414","#f7f6f6", "#33b3ae"] : ["#fff","#f7f6f6","#141414", "#1f706c"])

  return (
    <DefaultColorSection setValues={setAccentValues} colorPrio={["background","input","button", "span"]} startColor={colorArray} customAmount={1}>
      
    </DefaultColorSection>
  );
};
