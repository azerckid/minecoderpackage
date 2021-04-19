import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Modal,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

function QRscan() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [scandata, setScandata] = useState("");

  const char = scandata.split("|");
  const address = char[0];
  const coinNumber = char[1];

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const sendData = async () => {
    try {
      // await fetch("https://webhook.site/bfef764a-08c9-4678-b1bb-67458dbebc1d", {
      //   method: "post",
      //   mode: "no-cors",
      //   Headers: {
      //     Accept: "application/json",
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     address,
      //     coinNumber,
      //   }),
      // });
    } catch (e) {
      console.log(e);
    }
  };

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setModalVisible(true);
    console.log(type);
    setScandata(data);
    // alert(`${data}`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          width: Dimensions.get("screen").width,
          height: Dimensions.get("screen").height,
          margin: -80,
        }}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}></BarCodeScanner>
        {scanned && (
          <TouchableOpacity
            onPress={() => setScanned(false)}
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={styles.button}>Tap to Scan Again</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                {" "}
                아래 주소로 송금하시겠습니까?{" "}
              </Text>
              <Text style={(styles.modalText, { marginBottom: 50 })}>
                {address}
              </Text>

              <View
                style={{
                  flex: 0.1,
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 50,
                }}>
                <Text style={styles.modalTextCoin}> 보내는 금액 : </Text>
                <Text style={styles.modalTextCoin}>{coinNumber} coin</Text>
              </View>

              <View
                style={{
                  flex: 0.01,
                  flexDirection: "row",
                  alignItems: "center",
                }}>
                <TouchableHighlight
                  style={{ ...styles.openButton, backgroundColor: "#ff8ac2" }}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                    sendData();
                  }}>
                  <Text style={styles.textStyle}> 전 송 </Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={{ ...styles.openButton, backgroundColor: "#e3e3e3" }}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}>
                  <Text style={styles.textStyle}> 취 소 </Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </Modal>
        {/* <TouchableHighlight
          style={styles.openButton}
          onPress={() => {
            setModalVisible(true);
          }}>
          <Text style={styles.textStyle}>Show Modal</Text>
        </TouchableHighlight> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#fff",
  },
  barCodeView: {
    width: "100%",
    height: "100%",
    marginBottom: 40,
  },
  button: {
    marginTop: 400,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    width: 300,
    backgroundColor: "#ff8ac2",
    color: "#ffffff",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginHorizontal: 10,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    paddingHorizontal: 10,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  modalTextCoin: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 20,
  },
});

export default QRscan;
