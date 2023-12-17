import style from "./style.module.scss";
import { useState } from "react";
import { ColorInput } from "../../ColorInput";

export const DefaultColorSection = ( { children, colorPrio, startColor, customAmount=100} ) => {
    const [primaryAmount, setPrimaryAmount] = useState(5);
    let inputsCreated = customAmount;
    let colorName = colorPrio
    
    
    const addVariableItem = () => {
      setPrimaryAmount((prevValue) => prevValue + 1)
      if (typeof colorPrio !== "string") {
        colorName = colorPrio[primaryAmount - 1] || "accent"
        inputsCreated = ""
    } else {
        inputsCreated ? inputsCreated += 100 : null
    }
      setInputItemsArray((prevArray) => {
        
        const newVal = <ColorInput key={crypto.randomUUID()} id={crypto.randomUUID()} addVariableItem={addVariableItem} colorPriority={colorName} colorWeight={inputsCreated ? `-${inputsCreated}` : ""} isLast={true} />
        
        let copyArray = [...prevArray]
        copyArray[copyArray.length - 1] = <ColorInput key={crypto.randomUUID()} id={crypto.randomUUID()} removeVariableItem={removeVariableItem} colorPriority={colorName} colorWeight={inputsCreated ? `-${inputsCreated}` : ""} />
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
            inputsCreated = ""
        } else {
        } 
        if (index === primaryAmount - 1) {
            return <ColorInput key={crypto.randomUUID()} startColor={startColor[index]} id={crypto.randomUUID()} addVariableItem={addVariableItem} colorPriority={colorName} colorWeight={inputsCreated ? `-${inputsCreated}` : ""} isLast={true} />
        } else {
            if (index !== 0) {
                inputsCreated ? inputsCreated += 100 : null
            }
            return <ColorInput key={crypto.randomUUID()} startColor={startColor[index]} id={crypto.randomUUID()} removeVariableItem={removeVariableItem} colorPriority={colorName} colorWeight={inputsCreated ? `-${inputsCreated}` : ""} />
        }
      }
      )
    );
    
    console.log(inputItemsArray)

    return (

        <section className={style.variable__section}>
            <ul className={style.section__list}>
                {inputItemsArray}
                {children}
            </ul>
        </section>

    );
}