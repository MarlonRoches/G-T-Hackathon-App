import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import PageTitle from '../../Components/PageTitle';
import Card from '../../Components/Card';
import MainButton from '../../Components/MainButton';
import PageSubTitle from '../../Components/PageSubTitle';
import CardBeneficio from '../../Components/CardBeneficio';
import TitleButton from '../../Components/TitleButton';

const HomeContainer = () => {
  return (
    <>
      <ScrollView style={styles.scrollView} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
        <View style={styles.scrollViewContainer}>
            <PageTitle values={"Home"}/>
            <Card/>
            <View style={{width:"87%", height:"1%" , backgroundColor:"#0E4DA4",display:"flex",flexDirection:"column", justifyContent:"center",alignItems:"center", borderRadius:12, marginTop:30, marginBottom:5}}> 
                <TitleButton 
                style={{backgroundColor:"white", width:"99.5%", height:"95%",display:"flex",flexDirection:"column", justifyContent:"center",alignItems:"center", borderRadius:10}}
                textStyle={{color:"#0E4DA4"}}
                value={"Lanzar AR"} handle={()=> alert("lanzando AR")}/>
            </View>


            <PageSubTitle values={"Mis Beneficios "}/>
            <CardBeneficio/>
            <CardBeneficio/>
            <CardBeneficio/>
            <CardBeneficio/>
            <CardBeneficio/>
            <CardBeneficio/>
            <CardBeneficio/>
            <CardBeneficio/>
            <CardBeneficio/>
            <CardBeneficio/>
            <CardBeneficio/>
            <CardBeneficio/>
            <CardBeneficio/>
            <CardBeneficio/>
            <CardBeneficio/>
            <CardBeneficio/>
            <CardBeneficio/>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'white',
  },
  scrollViewContainer:{
    display:"flex",
    flexDirection:'column',
    alignItems:'center'
  },
  text: {
    fontSize: 42,
  },
});

export default HomeContainer