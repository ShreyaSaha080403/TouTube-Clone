export const API_KEY = 'AIzaSyBpZf4X1fb8g1vKoB0D0QTsLV1jgqiWK5Y';

export const value_converter=(value)=>{
    if(value>=1000000){
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000){
        return Math.floor(value/1000)+"K";
    }
    else{
        return value;
    }
};