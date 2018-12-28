import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Picker,
  TouchableOpacity,
  Image,
  Platform,
  Button,
  FlatList
} from "react-native";
import Metrics from "../styling/Metrics";
import DateTimePicker from "react-native-modal-datetime-picker";

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
      date_dialog_visible: false,
      type_label: "Drops",
      recurrence_label: "Daily"
    };
  }

  renderTimeDialog() {
    return (
      <DateTimePicker
        is24Hour={false}
        mode={"time"}
        isVisible={this.state.time_dialog_visible}
        onConfirm={this._handleTimePicked}
        onCancel={this._hideTimeDialog}
      />
    );
  }
  renderTimeText(date) {
    var myDate = new Date(date);
    var minutes = myDate.getMinutes();
    var hours = parseInt(myDate.getHours());

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    if (hours >= 12) {
      hours -= 12;
      if (hours === 0) {
        hours = 12;
      }
      minutes += " PM";
    } else {
      if (hours === 0) {
        hours = "12";
      }

      minutes += " AM";
    }

    return hours + ":" + minutes;
  }

  renderTime() {
    return (
      <View>
        <TouchableOpacity
          onPress={this._showTimeDialog.bind(this)}
          style={styles.addTimesButton}
        >
          <Text style={styles.medTimesTitle}>Add Times</Text>
        </TouchableOpacity>
        <FlatList
          data={this.state.data.intake_times.sort(function(a, b) {
            return a.date - b.date;
          })}
          renderItem={({ item }) => (
            <View style={styles.addTimeListItemContainer}>
              <View style={styles.addTimeListItem}>
                <Text style={styles.addTimesListItemText}>
                  {this.renderTimeText(item.date)}
                </Text>

                <TouchableOpacity style={styles.deleteButton}>
                  <Image
                    source={require("../images/delete-icon2.png")}
                    style={styles.deleteButtonImage}
                  />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
    );
  }
  _showTimeDialog = () =>
    this.setState({
      time_dialog_visible: true
    });

  _hideTimeDialog = () =>
    this.setState({
      time_dialog_visible: false
    });

  _handleTimePicked = date => {
    this.setState({
      data: {
        ...this.state.data,
        intake_times: this.state.data.intake_times.concat({
          date: date.toString(),
          status: true
        })
      }
    });

    this._hideTimeDialog();
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {/* Medicine Title */}
          <View style={{ alignItems: "center", marginTop: 10 }}>
            <Text style={styles.medTypeTitle}>Medicine title</Text>
          </View>
          <View>
            <TextInput style={styles.titleInput} />
          </View>
          {/* End of Medicine Title */}

          {/* Medcine Type */}
          <View style={styles.contentDivder}>
            <View style={{ alignItems: "center", marginTop: 10 }}>
              <Text style={styles.medTypeTitle}>Medicine type</Text>
            </View>
            <View>
              {Platform.OS === "android" && (
                <TouchableOpacity style={styles.selectedMedType}>
                  <View
                    style={{
                      padding: 5,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between"
                    }}
                  >
                    <Text style={styles.selectedValueText}>
                      {this.state.type_label}
                    </Text>
                    <Image
                      source={require("../images/list-arrow-242424.png")}
                      style={styles.listArrow}
                    />
                  </View>
                </TouchableOpacity>
              )}
              <Picker
                itemStyle={styles.medTypeTitle}
                selectedValue={this.state.data.type}
                onValueChange={(type, itemIndex) =>
                  this.setState({
                    type_label: this.state.type_picker.map(item => {
                      return item.value === type && item.label;
                    }),
                    data: {
                      ...this.state.data,
                      type
                    }
                  })
                }
                style={
                  Platform.OS === "android"
                    ? styles.medDropDownContainerAndroid
                    : styles.medDropDownContainer
                }
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

          {/* start of recurrence */}
          <View style={styles.contentDivder}>
            <View style={{ alignItems: "center", marginTop: 10 }}>
              <Text style={styles.medRecTitle}>Medicine Recurrence</Text>
            </View>
            <View>
              {Platform.OS === "android" && (
                <TouchableOpacity style={styles.selectedRecType}>
                  <View
                    style={{
                      padding: 5,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between"
                    }}
                  >
                    <Text style={styles.selectedValueText}>
                      {this.state.recurrence_label}
                    </Text>
                    <Image
                      source={require("../images/list-arrow-242424.png")}
                      style={styles.listArrow}
                    />
                  </View>
                </TouchableOpacity>
              )}
              <Picker
                itemStyle={styles.medRecTitle}
                selectedValue={this.state.data.recurrence}
                onValueChange={(recurrence, itemIndex) =>
                  this.setState({
                    recurrence_label: this.state.recurrences.map(item => {
                      return item.value === recurrence && item.label;
                    }),
                    data: {
                      ...this.state.data,
                      recurrence
                    }
                  })
                }
                style={
                  Platform.OS === "android"
                    ? styles.medDropDownContainerAndroid
                    : styles.medDropDownContainer
                }
              >
                {this.state.recurrences.map((recurrence, index) => {
                  return (
                    <Picker.Item
                      key={index}
                      label={recurrence.label}
                      value={recurrence.value}
                    />
                  );
                })}
              </Picker>
            </View>
          </View>
          {/* end of recurrence */}

          {/* Time modal start */}
          <View style={styles.contentDivder}>{this.renderTime()}</View>
          {this.renderTimeDialog()}
          {/* time modal end */}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#262626",
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
    borderTopWidth: 3,
    marginTop: 10
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
    paddingBottom: Platform.OS === "ios" ? 60 : 0,
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff"
  },

  medDropDownContainerAndroid: {
    backgroundColor: "transparent",
    color: "transparent",
    width: Metrics.fromTypeDropMenucontainerW,
    height: Metrics.fromTypeDropMenucontainerH,
    marginTop: 10,
    marginBottom: 10,
    justifyContent: "center",
    borderColor: "grey",
    borderRadius: 5,
    shadowColor: "#303838",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35
  },
  medDropDownContainer: {
    width: Metrics.fromTypeDropMenucontainerW,
    height: Metrics.fromTypeDropMenucontainerH,
    color: "white",
    marginTop: 10,
    marginBottom: 10,
    justifyContent: "center",
    borderColor: "grey",
    borderRadius: 5,
    shadowColor: "#303838",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35
  },

  selectedValueText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#242424"
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

  listArrow: {
    width: 10,
    height: 10
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
  },

  medTimesTitle: {
    paddingBottom: Platform.OS === "ios" ? 60 : 0,
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff"
  },

  medRecTitle: {
    paddingBottom: Platform.OS === "ios" ? 60 : 0,
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff"
  },

  selectedRecType: {
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
  addTimesButton: {
    width: Metrics.fromTypeDropMenucontainerW,
    height: Metrics.fromTypeDropMenucontainerH,
    backgroundColor: "#009688",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 5,
    borderColor: "grey",
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
    shadowColor: "#303838",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35
  },
  addTimeListItemContainer: {
    height: Metrics.formAddTimeListContainerHeight,
    width: Metrics.formAddTimeListContainerWidth,
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "#595d63",
    borderTopColor: "transparent",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderWidth: 1
  },

  addTimeListItem: {
    height: Metrics.formAddTimeListHeight,
    width: Metrics.formAddTimeListWidth,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },

  addTimesListItemText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    justifyContent: "flex-start"
  },

  deleteButton: {
    height: 30,
    width: 30,
    justifyContent: "flex-end"
  },

  deleteButtonImage: {
    width: 40,
    height: 40,
    borderRadius: 5
  }
});
