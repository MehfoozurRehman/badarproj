import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {

  StyleSheet,
  Modal,
  Switch,
  Image,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  ScrollViewBase,
} from "react-native";
import SidePanel from "../Navigation/SidePanel";

const { width } = Dimensions.get("window");
const Balance = ({ navigation }) => {
  const [sidePanel, setSidePanel] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  // This is to manage Modal State

  const [isModalVisible, setModalVisible] = useState(false);

  // This is to manage TextInput State
  const [inputValue, setInputValue] = useState("");

  // Create toggleModalVisibility function that will
  // Open and close modal upon button clicks.
  const toggleModalVisibility = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <ScrollView style={{ backgroundColor: "#1C213E" }}>
      <View style={styles.container}>
        <View style={{ flexDirection: "row", marginTop: "15%" }}>
          <TouchableOpacity onPress={()=>{ navigation.openDrawer( )}} style={{ marginRight: "57%" }}>
            <Image source={require("../assets/component.png")} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={toggleModalVisibility}
            style={{
              marginRight: "3%",
              borderRadius: 18,
              height: 38,
              width: 38,
              borderWidth: 1,
              borderColor: "#90EDD9",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image source={require("../assets/trophy.png")} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
          setSidePanel(true);
        }}
            style={{
              height: 38,
              width: 38,
              borderColor: "#FFFFFF",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image source={require("../assets/choti.png")} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            borderColor: "#FFFFFF",
            height: 21,
            width: 67,
            marginRight: "75%",
          }}
        >
          <Text style={{ fontSize: 16, color: "#FFFFFF" }}>Balance</Text>
        </View>

        <View
          style={{flexDirection:'row',
            marginLeft: "8%",
            height: 65,
            width: 346,
            borderColor: "#FFFFFF",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 49, color: "#90EDD9", fontWeight: "bold" }}>
            $ 4,142.19 
          </Text>

          <View style={{margin:'2%'}}></View>
          <TouchableOpacity  onPress={() => navigation.navigate("Fundingsources")}>
          <Text style={{ fontSize: 49, color: "#90EDD9", fontWeight: "bold" }}>
               + 
          </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginTop: "5%",
            borderColor: "#FFFFFF",
            height: 21,
            width: 67,
            marginRight: "75%",
          }}
        >
          <Text style={{ fontSize: 16, color: "#FFFFFF" }}>Offers</Text>
        </View>

        <ScrollView
          showsHorizontalScrollIndicator={false}
          automaticallyAdjustContentInsets={true}
          horizontal={true}
        >
          <View
            style={{
              marginTop: "4%",
              flexDirection: "row",
              borderColor: "#FFFFFF",
              height: 86,
              width: 674,
              borderColor: "#FFFFFF",
            }}
          >
            <TouchableOpacity
              style={{
                marginLeft: "4%",
                alignItems: "center",
                flexDirection: "row",
                borderWidth: 2,
                borderRadius: 15,
                borderColor: "#90EDD9",
                height: 80,
                width: 182,
              }}
            >
              <Image
                style={{ marginLeft: "5%" }}
                source={require("../assets/nike.png")}
              />

              <View
                style={{
                  marginLeft: "2%",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 80,
                  width: 100,
                  borderColor: "#FFFFFF",
                }}
              >
                <View style={{ height: 19, width: 98, borderColor: "#FFFFFF" }}>
                  <Text style={{ fontSize: 13, color: "#FFFFFF" }}>
                    Jay,s Clothing
                  </Text>
                </View>

                <View style={{ height: 19, width: 98, borderColor: "#FFFFFF" }}>
                  <Text style={{ fontSize: 13, color: "#90EDD9" }}>
                    25% Off
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                marginLeft: "3%",
                alignItems: "center",
                flexDirection: "row",
                borderWidth: 2,
                borderRadius: 15,
                borderColor: "#90EDD9",
                height: 80,
                width: 182,
              }}
            >
              <Image
                style={{ marginLeft: "5%" }}
                source={require("../assets/nike.png")}
              />

              <View
                style={{
                  marginLeft: "2%",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 80,
                  width: 100,
                  borderColor: "#FFFFFF",
                }}
              >
                <View style={{ height: 19, width: 98, borderColor: "#FFFFFF" }}>
                  <Text style={{ fontSize: 13, color: "#FFFFFF" }}>
                    Jay,s Clothing
                  </Text>
                </View>

                <View style={{ height: 19, width: 98, borderColor: "#FFFFFF" }}>
                  <Text style={{ fontSize: 13, color: "#90EDD9" }}>
                    25% Off
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                marginLeft: "3%",
                alignItems: "center",
                flexDirection: "row",
                borderWidth: 2,
                borderRadius: 15,
                borderColor: "#90EDD9",
                height: 80,
                width: 182,
              }}
            >
              <Image
                style={{ marginLeft: "5%" }}
                source={require("../assets/nike.png")}
              />

              <View
                style={{
                  marginLeft: "2%",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 80,
                  width: 100,
                  borderColor: "#FFFFFF",
                }}
              >
                <View style={{ height: 19, width: 98, borderColor: "#FFFFFF" }}>
                  <Text style={{ fontSize: 13, color: "#FFFFFF" }}>
                    Jay,s Clothing
                  </Text>
                </View>

                <View style={{ height: 19, width: 98, borderColor: "#FFFFFF" }}>
                  <Text style={{ fontSize: 13, color: "#90EDD9" }}>
                    25% Off
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <View
          style={{
            marginTop: "5%",
            borderColor: "#FFFFFF",
            height: 21,
            width: 67,
            marginRight: "75%",
          }}
        >
          <Text style={{ fontSize: 16, color: "#FFFFFF" }}>Actions</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: "5%",
            alignItems: "center",
            justifyContent: "center",
            borderColor: "#FFFFFF",
            height: 86,
            width: 400,
          }}
        >
          <TouchableOpacity
          onPress={() => navigation.navigate("SendMoney")}
            style={{
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 2,
              borderColor: "#90EDD9",
              height: 86,
              width: 94,
              borderRadius: 15,
              
            }}
          >
            <View>
              <Image source={require("../assets/plane.png")} />
            </View>

            <View>
              <Text style={{ fontSize: 16, color: "#FFFFFF" }}>Send</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity     onPress={() => navigation.navigate("RequestMoney")}
            style={{
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 2,
              borderColor: "#90EDD9",
              height: 86,
              marginLeft: "5%",
              width: 94,
              borderRadius: 15,
            }}
          >
            <View>
              <Image source={require("../assets/cheers.png")} />
            </View>

            <View>
              <Text style={{ fontSize: 16, color: "#FFFFFF" }}>Request</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity  onPress={() => navigation.navigate("qrcode")}
            style={{
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 2,
              borderColor: "#90EDD9",
              height: 86,
              width: 94,
              marginLeft: "5%",
              borderRadius: 15,
            }}
          >
            <View>
              <Image source={require("../assets/dolar.png")} />
            </View>

            <View>
              <Text style={{ fontSize: 16, color: "#FFFFFF" }}>Pay</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginTop: "5%",
            borderColor: "#FFFFFF",
            height: 21,
            width: 93,
            marginRight: "70%",
          }}
        >
          <Text style={{ fontSize: 16, color: "#FFFFFF" }}>Transactons</Text>
        </View>

        <View style={{ marginLeft: "7%" }}>
          <TouchableOpacity
            style={{
              justifyContent: "center",
              flexDirection: "row",
              height: 54,
              width: 395,
              borderColor: "#FFFFFF",
              marginTop: "5%",
            }}
          >
            <View>
              <Image source={require("../assets/amazon.png")} />
            </View>

            <View
              style={{
                marginLeft: "1%",
                marginRight: "17%",
                borderColor: "#FFFFFF",
                height: 50,
                width: 170,
              }}
            >
              <Text style={{ fontSize: 14, color: "#FFFFFF" }}>$AlphaBeta</Text>
              <Text style={{ fontSize: 13, color: "#FFFFFF" }}>
                Transaction ID: 119009
              </Text>
            </View>

            <View
              style={{
                height: 29,
                width: 64,
                marginRight: "12%",
                borderColor: "#FFFFFF",
              }}
            >
              <Text style={{ color: "#17C261" }}>+ $11.89</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              justifyContent: "center",
              flexDirection: "row",
              height: 54,
              width: 395,
              borderColor: "#FFFFFF",
              marginTop: "3%",
            }}
          >
            <View>
              <Image source={require("../assets/amazon.png")} />
            </View>

            <View
              style={{
                marginLeft: "1%",
                marginRight: "17%",
                borderColor: "#FFFFFF",
                height: 50,
                width: 170,
              }}
            >
              <Text style={{ fontSize: 14, color: "#FFFFFF" }}>
                $RisaMidyett
              </Text>
              <Text style={{ fontSize: 13, color: "#FFFFFF" }}>
                Transaction ID: 119009
              </Text>
            </View>

            <View
              style={{
                height: 29,
                width: 64,
                marginRight: "12%",
                borderColor: "#FFFFFF",
              }}
            >
              <Text style={{ color: "#17C261" }}>+ $69.50</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              justifyContent: "center",
              flexDirection: "row",
              height: 54,
              width: 395,
              borderColor: "#FFFFFF",
              marginTop: "3%",
            }}
          >
            <View>
              <Image source={require("../assets/amazon.png")} />
            </View>

            <View
              style={{
                marginLeft: "1%",
                marginRight: "17%",
                borderColor: "#FFFFFF",
                height: 50,
                width: 170,
              }}
            >
              <Text style={{ fontSize: 14, color: "#FFFFFF" }}>
                $21Suppliers
              </Text>
              <Text style={{ fontSize: 13, color: "#FFFFFF" }}>
                Transaction ID: 119009
              </Text>
            </View>

            <View
              style={{
                height: 29,
                width: 64,
                marginRight: "12%",
                borderColor: "#FFFFFF",
              }}
            >
              <Text style={{ color: "#DB3663" }}>- $49.99</Text>
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Text style={{ fontSize: 14, color: "#FFFFFF" }}>Show more</Text>
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent
          visible={isModalVisible}
          presentationStyle="overFullScreen"
          onDismiss={toggleModalVisibility}
        >
          <View style={styles.viewWrapper}>
            <View style={styles.modalView}>
              <View
                style={{
                  borderRadius: 15,
                  alignItems: "center",
                  borderWidth: 1,
                  backgroundColor: "#1C213E",
                  borderColor: "#FFFFFF",
                  height: 560,
                  width: 350,
                }}
              >
                <View
                  style={{
                    marginTop: "5%",
                    width: 200,
                    borderColor: "#FFFFFF",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#FFFFFF",
                      fontWeight: "bold",
                    }}
                  >
                    Monetize your Data
                  </Text>
                </View>

                <View
                  style={{
                    marginTop: "3%",
                    height: 70,
                    width: 290,
                    borderColor: "#FFFFFF",
                  }}
                >
                  <Text style={{ fontSize: 12, color: "#FFFFFF" }}>
                    Did you know that all your activity data is shared by social
                    media platform with advertisers for profits and you get
                    nothing for it?
                  </Text>
                </View>

                <View
                  style={{
                    marginTop: "2%",
                    height: 80,
                    width: 290,
                    borderColor: "#FFFFFF",
                  }}
                >
                  <Text style={{ fontSize: 12, color: "#FFFFFF" }}>
                    We value your privacy and want you to get paid for your
                    transactional data.Even after you enable this option all of
                    this collected data will be annonymised and cannot be
                    tracked back to you :)
                  </Text>
                </View>

                <View
                  style={{
                    marginTop: "2%",
                    height: 70,
                    width: 290,
                    borderColor: "#FFFFFF",
                  }}
                >
                  <Text style={{ fontSize: 12, color: "#FFFFFF" }}>
                    Plus you will get specialised discount based on brand
                    loyalty. it,s a win win and whenever you feel like it you
                    can come here and disable sharing!
                  </Text>
                </View>

                <View style={{ flexDirection: "row", height: 20, width: 300 }}>
                  <Text
                    style={{
                      fontSize: 14,
                      color: "#FFFFFF",
                      fontWeight: "bold",
                    }}
                  >
                    Share Data
                  </Text>
                  <View
                    style={{
                      marginLeft: "45%",
                      alignItems: "center",
                      justifyContent: "center",
                      height: 25,
                      width: 120,
                    }}
                  >
                    <Switch
                      trackColor={{ false: "#767577", true: "#90EDD9" }}
                      thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
                      ios_backgroundColor="#3e3e3e"
                      onValueChange={toggleSwitch}
                      value={isEnabled}
                    />
                  </View>
                </View>

                <View
                  style={{
                    marginTop: "3%",
                    flexDirection: "row",
                    height: 20,
                    width: 300,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 14,
                      color: "#FFFFFF",
                      fontWeight: "bold",
                    }}
                  >
                    Offers Recieved
                  </Text>
                  <View
                    style={{
                      marginLeft: "25%",
                      alignItems: "center",
                      justifyContent: "center",
                      height: 25,
                      width: 120,
                    }}
                  >
                    <Text style={{ color: "#FFFFFF", fontWeight: "bold" }}>
                      Cash Back
                    </Text>
                  </View>
                </View>
                <View style={{ flexDirection: "row", height: 20, width: 300 }}>
                  <Text
                    style={{
                      fontSize: 24,
                      color: "#90EDD9",
                      height: 50,
                      width: 50,
                    }}
                  >
                    33
                  </Text>
                  <View
                    style={{
                      marginLeft: "47%",
                      alignItems: "center",
                      justifyContent: "center",
                      height: 50,
                      width: 120,
                    }}
                  >
                    <Text style={{ fontSize: 24, color: "#90EDD9" }}>233$</Text>
                  </View>
                </View>

                <View style={{ marginTop: "2%", height: 40, width: 150 }}>
                  <TouchableOpacity
                    onPress={toggleModalVisibility}
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 10,
                      marginTop: "4%",
                      height: 40,
                      width: 130,
                      borderColor: "#90EDD9",
                      borderWidth: 1,
                    }}
                  >
                    <Text style={{ color: "#90EDD9" }}>Apply</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          <StatusBar style="auto" />
        </Modal>
      </View>
      {sidePanel ? <SidePanel setSidePanel={setSidePanel} /> : null}


    </ScrollView>
  );
};
export default Balance;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C213E",
    alignItems: "center",
  },
  viewWrapper: {
    marginTop: "40%",
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",

    height: 200,
  },
  modalView: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    elevation: 5,
    transform: [{ translateX: -(width * 0.4) }, { translateY: -90 }],
    height: 280,
    width: width * 0.8,
    backgroundColor: "#fff",
    borderRadius: 7,
  },
});
