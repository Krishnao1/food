import React,{useState, useEffect } from 'react'
import {View,Text,StyleSheet,ScrollView} from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'


const SearchScreen =()=>{
    
    const [term , setTerm] = useState('');
    const [searchApi,results] =useResults();
    const filterResultsByPrice = (price)=>{
        return results.filter(result =>{
           return result.price === price;
        });
    }   
    return  <> 
        <SearchBar term={term}  onTermChange = {setTerm} onTermSubmit={searchApi} />
        {/* <Text style={style.text}>Search Screen</Text> */}
        { term  ?  <Text>Search {term}</Text> : null }    
        {/* <Text> we have found {results.length} result</Text> */}
        <ScrollView >
        <ResultsList  
        //  navigation={navigation}
        results={filterResultsByPrice('$')} title="Cost Effective"/>
        <ResultsList 
        //  navigation={navigation} 
        results={filterResultsByPrice('$$')} title="Bit Pricier"/>
        <ResultsList 
        //  navigation={navigation} 
        results={filterResultsByPrice('$')} title="Big Spender"/>
        <ResultsList 
        //  navigation={navigation}
        results={filterResultsByPrice('$$')} title="Big Spender"/> 
    </ScrollView>
    </>
}

const style=StyleSheet.create({
    text:{
        fontSize:20,
        color:'red'
    }
})

export default SearchScreen;