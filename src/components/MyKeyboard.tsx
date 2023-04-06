import * as React from "react";
import Button from "./Button";
import {View, Text} from "react-native"
import {Styles} from "../styles/GlobalStyles"
import { myColors } from "../styles/Colors";

export default function MyKeyboard(){
        const [firstNumber, setFirstNumber] = React.useState("");
        const [secondNumber, setSecondNumber] = React.useState("");
        const [operation, setOperation] = React.useState("");
        const [result, setResult] = React.useState<Number | null >(null);

        const handleNumberPress = (buttonValue: string) => {
            if(firstNumber.length < 10){
                setResult(null)
                setFirstNumber(firstNumber + buttonValue);
            }
            if(result != null && operation == ""){
                setResult(null)
                setFirstNumber(buttonValue)
            }
        };
        const handleOperationPress = (buttonValue: string) => {
            if(firstNumber != ""){
                setResult(null)
                setOperation(buttonValue);
                setSecondNumber(firstNumber);
                setFirstNumber("");
            }  
        };

        const changePositivOrNegativ = () =>{
            if(firstNumber != ""){
                setResult(null)
                var result = parseFloat(firstNumber) * -1
                setFirstNumber(result.toString())
            }
        }

        const toPercentage = () =>{
            if(firstNumber != ""){
                setResult(null)
                var result = parseFloat(firstNumber) / 100
                setFirstNumber(result.toString())
            }
        }

        const clear = () =>{
            setFirstNumber("")
            setSecondNumber("")
            setOperation("")
            setResult(null)
        }

        const getResult = () => {
            switch (operation) {
                case "+": 
                    clear();
                    var result = parseFloat((parseFloat(secondNumber) + parseFloat(firstNumber)).toFixed(3));
                    setResult(result)
                    setFirstNumber(result.toString())
                    break;
                case "-": 
                    clear();
                    var result = parseFloat((parseFloat(secondNumber) - parseFloat(firstNumber)).toFixed(3));
                    setResult(result)
                    setFirstNumber(result.toString())
                    break;   
                 case "*": 
                    clear();
                    var result = parseFloat((parseFloat(secondNumber) * parseFloat(firstNumber)).toFixed(3));
                    setResult(result)
                    setFirstNumber(result.toString())
                    break;
                  case "/": 
                    clear();
                    var result = parseFloat((parseFloat(secondNumber) / parseFloat(firstNumber)).toFixed(3));
                    setResult(result)
                    setFirstNumber(result.toString())
                    break; 
                case "%": 
                    clear();
                    var result = parseFloat(firstNumber) / 100
                    setFirstNumber(result.toString())
                    break; 
                default: 
                    clear();
                    setResult(0);
                    break;
            }
        }

        const firstNumberDisplay = () => {
            if(result !== null){
                return <Text style={result < 99999 ? [Styles.screenFirstNumber, {color: myColors.white}]: [Styles.screenFirstNumber, {fontSize: 50, color:myColors.white}]}>{result?.toString()}</Text>
            }
            if (firstNumber && firstNumber.length < 6){
                return <Text style={Styles.screenFirstNumber}>{firstNumber}</Text>
            }
            if(firstNumber === ""){
                return <Text style={Styles.screenFirstNumber}>{"0"}</Text>
            }
            if(firstNumber.length > 5 && firstNumber.length < 8){
                return (
                    <Text style={[Styles.screenFirstNumber, {fontSize: 70}]}>
                        {firstNumber}
                    </Text>
                );
            }
            if(firstNumber.length > 7){
                return (
                    <Text style={[Styles.screenFirstNumber, {fontSize: 50}]}>
                    {firstNumber}
                </Text>
                );
            }
        };

        return(
            <View style={Styles.viewBottom}>
                <View 
                    style={{
                        height: 120,
                        width: "90%",
                        justifyContent: "flex-end",
                        alignSelf: "center",
                    }}
            >
                <Text style={Styles.screenSecondNumber}>
                    {secondNumber}
                    <Text style={{color: "#0074FF", fontSize: 50, fontWeight: '500'}}>{operation}</Text>
                </Text>
                {firstNumberDisplay()}
            </View>
            <View style={Styles.row}>
                <Button title="C" isBlue onPress={clear} />
                <Button title="+/-" isBlue onPress={() => changePositivOrNegativ()} />
                <Button title="%" isBlue onPress={() => toPercentage()} />
                <Button title="÷" isWhite onPress={() => handleOperationPress("/")} />
            </View>
            <View style={Styles.row}>
                <Button title="7" isBlue onPress={() => handleNumberPress("7")} />
                <Button title="8" isBlue onPress={() => handleNumberPress("8")} />
                <Button title="9" isBlue onPress={() => handleNumberPress("9")} />
                <Button title="x" isWhite onPress={() => handleOperationPress("*")} />
            </View>
            <View style={Styles.row}>
            <Button title="4" isBlue onPress={() => handleNumberPress("4")} />
                <Button title="5" isBlue onPress={() => handleNumberPress("5")} />
                <Button title="6" isBlue onPress={() => handleNumberPress("6")} />
                <Button title="-" isWhite onPress={() => handleOperationPress("-")} />
            </View>
            <View style={Styles.row}>
            <Button title="1" isBlue onPress={() => handleNumberPress("1")} />
                <Button title="2" isBlue onPress={() => handleNumberPress("2")} />
                <Button title="3" isBlue onPress={() => handleNumberPress("3")} />
                <Button title="+" isWhite onPress={() => handleOperationPress("+")} />
            </View>
            <View style={Styles.row}>
            <Button title="." isBlue onPress={() => handleNumberPress(".")} />
                <Button title="0" isBlue onPress={() => handleNumberPress("0")} />
                <Button title="9" isBlue onPress={() => setFirstNumber(firstNumber.slice(0, -1))} />
                <Button title="=" isWhite onPress={() => getResult()} />
            </View>
        </View>
        )
}