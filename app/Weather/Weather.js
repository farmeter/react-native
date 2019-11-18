import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, ImageBackground } from 'react-native';
import Forecast from './Forecast';
import { getForecast, getForecastByCityName } from "../util/open_weather_map"

export default class Weather extends React.Component {

  constructor(props) {
    super(props);
    this.state = { zip: "", forecast: null };
  }

  _handleTextChange = event => {
    let zip = event.nativeEvent.text;
    getForecastByCityName(zip).then(forecast => {
      console.log(forecast);
      this.setState({zip: zip, forecast: forecast});
    });
  }

  render() {
    let content = null;
    if(this.state.forecast !== null) {
      content = (
        <Forecast
            main={this.state.forecast.main}
            description={this.state.forecast.description}
            temp={this.state.forecast.temp}
        />
      );
    }
    return (
      <View style={styles.container}>
        <ImageBackground
          // source={require("../image/flowers.png")}
          source={{uri:"https://www.viewbug.com/media/mediafiles/2016/04/30/65766312_large1300.jpg"}}
          resizeMode="cover"
          style={styles.backdrop} >
          <View style={styles.overlay}>
            <View style={styles.row}>
              <Text style={styles.mainText}>
                Current weather for
              </Text>
              <View style={styles.zipContainer} >
                <TextInput
                  style={[styles.zipCode, styles.mainText]}
                  onSubmitEditing={this._handleTextChange}/>
              </View>
            </View>
            {content}
          </View>
        </ImageBackground>
      </View>
    );
  }
}
const baseFontSize = 16;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#666666',
    alignItems: 'center',
    paddingTop: 30,
  },
  backdrop: {
    flex:1,
    flexDirection: "column"
  },
  overlay: {
    paddingTop: 5,
    backgroundColor: "#000000",
    opacity: 0.5,
    flexDirection: "column",
    alignItems: "center"
  },
  row: {
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "flex-start",
    padding: 30
  },
  zipContainer: {
    height: baseFontSize + 10,
    borderBottomColor: "#DDDDDD",
    borderBottomWidth: 1,
    marginLeft: 5,
    marginTop: 3
  },
  zipCode: {flex:1, flexBasis: 1, width: 50, height: baseFontSize },
  mainText: {fontSize: baseFontSize, color: "#FFFFFF"},

});

