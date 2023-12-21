import style from "./style.module.scss";
import { useState } from "react";
import { ColorInput } from "../../ColorInput";

export const DefaultColorSection = ( { children, setValues, colorPrio, startColor, customAmount=100} ) => {
    const [primaryAmount, setPrimaryAmount] = useState(5);
    let accent = 1
    let colorWeight = customAmount;
    let colorName = colorPrio
    
    
    const addVariableItem = () => {
      setPrimaryAmount((prevValue) => prevValue + 1)
      if (typeof colorPrio !== "string") {
        colorName = colorPrio[primaryAmount - 1] || "accent"
        colorWeight = accent
        accent ++;
      } else {
          colorWeight ? colorWeight += 100 : null
      }
      setInputItemsArray((prevArray) => {
        
        const newVal = <ColorInput key={crypto.randomUUID()} setValues={setValues} id={crypto.randomUUID()} addVariableItem={addVariableItem} colorPriority={colorName} colorWeight={colorWeight ? `-${colorWeight}` : ""} isLast={true} />
        
        let copyArray = [...prevArray]
        console.log(copyArray)
        copyArray[copyArray.length - 1] = <ColorInput key={crypto.randomUUID()} setValues={setValues} id={crypto.randomUUID()} removeVariableItem={removeVariableItem} colorPriority={colorName} colorWeight={colorWeight ? `-${colorWeight}` : ""} />
        copyArray.push(newVal)
        return copyArray
    })
    }
  
    const removeVariableItem = (id) => {
        setPrimaryAmount((prevAmount) => prevAmount + 1)
      setInputItemsArray((prevArray) => 
        prevArray.filter((component) => component.props.id !== id)
      )
    }
    
    const [inputItemsArray, setInputItemsArray] = useState(
      Array.from({length: primaryAmount}, (_, index) => {
        if (typeof colorPrio !== "string") {
            colorName = colorPrio[index] || "accent"
            colorWeight = ""
        } else {
        } 
        if (index === primaryAmount - 1) {
            return <ColorInput key={crypto.randomUUID()} setValues={setValues} startColor={startColor[index]} id={crypto.randomUUID()} addVariableItem={addVariableItem} colorPriority={colorName} colorWeight={colorWeight ? `-${colorWeight}` : ""} isLast={true} />
        } else {
            if (index !== 0) {
                colorWeight ? colorWeight += 100 : null
            }
            return <ColorInput key={crypto.randomUUID()} setValues={setValues} startColor={startColor[index]} id={crypto.randomUUID()} removeVariableItem={removeVariableItem} colorPriority={colorName} colorWeight={colorWeight ? `-${colorWeight}` : ""} />
        }
      }
      )
    );

    return (

        <section className={style.variable__section}>
            <ul className={style.section__list}>
                {inputItemsArray}
                {children}
            </ul>
        </section>

    );
}