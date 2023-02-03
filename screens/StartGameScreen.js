import { StyleSheet, TextInput, View } from "react-native";
import PrimamryBtn from "../components/PrimamryBtn";

const StartGameScreen = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
      />
      <View style={styles.innerViewContainer}>
        <View style={styles.btnViewContainer}>
          <PrimamryBtn style={styles.btn}>Reset</PrimamryBtn>
        </View>
        <View style={styles.btnViewContainer}>
          <PrimamryBtn>Confirm</PrimamryBtn>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    padding: 20,
    backgroundColor: "#a20956",
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    alignItems: "center",
    justifyContent: "center",
  },
  numberInput: {
    height: 50,
    width: "25%",
    textAlign: "center",
    fontSize: 24,
    backgroundColor: "#1b1d22",
    padding: 8,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 12,
    fontWeight: "bold",
    // borderRadius: 2,
  },
  innerViewContainer: {
    flexDirection: "row",
  },
  btnViewContainer: {
    flex: 1,
  },
});
