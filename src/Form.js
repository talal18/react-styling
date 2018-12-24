import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Picker,
  TouchableOpacity
} from "react-native";
import Metrics from "../styling/Metrics";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        title: "",
        type: "drops",
        intake_times: [],
        dosage: 0,
        recurrence: "daily",
        start_date: "",
        end_date: "",
        notes: "",
        userId: "",
        m_id: ""
      },
      time_dialog_visible: false,
      type_picker: [
        { label: "Drops", value: "drops" },
        { label: "Injection", value: "injection" },
        { label: "Liquid", value: "liquid" },
        { label: "Ointment (Cream, Gel,...)", value: "ointment" },
        { label: "Pills", value: "pills" },
        { label: "Powder", value: "powder" },
        { label: "Spray", value: "spray" },
        { label: "Suppositories", value: "suppositories" },
        { label: "Troches", value: "troches" }
      ],
      recurrences: [
        { label: "Daily", value: "daily" },
        { label: "Weekly", value: "weekly" },
        { label: "Monthly", value: "monthly" },
        { label: "Yearly", value: "yearly" }
      ],
      start_date_label: "",
      end_date_label: "",
      isStartDate: false,
      isEndDate: false,
      date_dialog_visible: false
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {/* Medicine Title */}
          <View>
            <TextInput placeholder="Medicine title" style={styles.titleInput} />
          </View>
          {/* End of Medicine Title */}

          {/* Medcine Type */}
          <View style={styles.contentDivder}>
            <View style={{ alignItems: "center", marginTop: 10 }}>
              <Text style={styles.medTypeTitle}>Medicine type</Text>
            </View>
            <View>
              <TouchableOpacity style={styles.selectedMedType}>
                <Text style={styles.selectedValueText}>
                  {this.state.data.type}
                </Text>
              </TouchableOpacity>
              <Picker
                selectedValue={this.state.data.type}
                onValueChange={(type, itemIndex) =>
                  this.setState({
                    data: {
                      ...this.state.data,
                      type
                    }
                  })
                }
                style={styles.medTypeContainer}
                prompt="Medicine Type"
              >
                {this.state.type_picker.map((type, index) => {
                  return (
                    <Picker.Item
                      key={index}
                      label={type.label}
                      value={type.value}
                    />
                  );
                })}
              </Picker>
            </View>
          </View>
          {/*end of Medcine Type */}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#424242",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Metrics.formContainerPaddingTop
  },

  formContainer: {
    paddingLeft: Metrics.formContainerPaddingLeft,
    paddingRight: Metrics.formContainerPaddingRight
  },

  contentDivder: {
    width: Metrics.formContentDivider,
    borderTopColor: "#595d63",
    borderTopWidth: 2
  },

  titleInput: {
    width: Metrics.formTitleinputBoxW,
    height: Metrics.formTitleinputBoxH,
    paddingLeft: 5,
    backgroundColor: "#fff",
    borderColor: "grey",
    borderRadius: 5,
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
    shadowColor: "#303838",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35
  },

  medTypeTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff"
  },

  medTypeContainer: {
    width: Metrics.fromTypeDropMenucontainerW,
    height: Metrics.fromTypeDropMenucontainerH,
    justifyContent: "center",
    backgroundColor: "transparent",
    color: "transparent",
    borderColor: "grey",
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
    shadowColor: "#303838",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35
  },

  selectedValueText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black"
  },

  selectedMedType: {
    width: Metrics.fromTypeDropMenucontainerW,
    height: Metrics.fromTypeDropMenucontainerH,
    backgroundColor: "#fff",
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: 5,
    position: "absolute",
    borderColor: "grey",
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
    shadowColor: "#303838",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35
  },

  medTypeListContainer: {
    margin: 20,
    backgroundColor: "#efefef",
    bottom: 20,
    left: 20,
    right: 20,
    position: "absolute",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 5,
    borderColor: "grey"
  },

  medTypeListTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "black",
    marginBottom: 5,
    marginTop: 5
  },
  medTypeList: {
    fontSize: 18,
    fontWeight: "300",
    color: "black",
    margin: 5
  }
});
