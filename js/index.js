var app = angular.module('weatherApp',[]);

//Weather Ctrl
app.controller('weatherCtrl',function($scope,$http){
  var vm = $scope;
  vm.channelInfo = {
    heading: "Open Weather Api Project",
    subHeading1:"Free Code Camp:Frontend Project",
    subHeading2:{
      name:"Check out my Github Profile",
      link: "https://github.com/ChinmayaKinnarkar"
    }
  }
  
  $http.get("https://ipapi.co/json").success(function(data){
  vm.lat= data.latitude;
  vm.lon= data.longitude;
  console.log(data);
  var apiKey="45dff9608aa50b8ebf453de1fb32f521";
  var openWeatherURL = "https://api.openweathermap.org/data/2.5/weather?lat="+ vm.lat + "&lon="+vm.lon+ "&appid=" +apiKey;
  console.log(openWeatherURL);
  console.log(openWeatherURL);
  $http.get(openWeatherURL).success(function(data){
    console.log(data);
    vm.description=data.weather[0].description;
    vm.speed = (2.237*data.wind.speed).toFixed(1) + " mph";
    vm.name=data.name;
    vm.temp=data.main.temp;
    vm.fTemp= (vm.temp*(9/5)-459.67).toFixed(1) + "  (°F)";
    vm.cTemp = (vm.temp-273).toFixed(1) + "  (°C)";
    vm.icon="http://openweathermap.org/img/w/"+data.weather[0].icon +".png";
    switch(vm.description){
      case 'haze':{
        vm.weatherBackground={
          'background':'url(https://images.unsplash.com/photo-1481234877003-b379d46b7f2b?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=)',
        };
        break;
      }
        case 'clear sky':{
          vm.weatherBackground={
            'background':'url(https://images.unsplash.com/photo-1467602472207-e33153d8856f?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=)'
          };
          break;
        }
        case 'broken clouds': {
           vm.weatherBackground={
            'background':' url (http://danwrayphoto.com/wp-content/uploads/2014/06/WRA4814.jpg)'
           };
           break;
         }
         case 'few clouds' : {
           vm.weatherBackground={
            'background':' url (http://mollyirwin.typepad.com/.a/6a00d8349eed6669e20133f4139a5c970b-pi)'
           };
           break;
         }
    case 'mist' : {
           vm.weatherBackground={
            'background':' url (https://images.unsplash.com/photo-1481234877003-b379d46b7f2b?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=)'
           };
           break;
         }
         case 'rain' : {
           vm.weatherBackground={
            'background':' url (https://images.unsplash.com/photo-1465479423260-c4afc24172c6?dpr=1&auto=format&fit=crop&w=1500&h=1001&q=80&cs=tinysrgb&crop=)'
           };
           break;
         }
         case 'scattered clouds' : {
           vm.weatherBackground={
            'background':' url (http://codingtutorials360.com/img/FreeCodeCamp/OpenWeather/scatteredClouds.jpg)'
           };
           break;
         }
         case 'shower rain' : {
           vm.weatherBackground={
            'background':' url ()'
           };
           break;
         }
         case 'snow' : {
           vm.weatherBackground={
            'background':' url (https://images.unsplash.com/photo-1485918557479-6623009f3089?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=)'
           };
           break;
         }
       case 'thunderstorm' : {
           vm.weatherBackground={
            'background':' url (http://codingtutorials360.com/img/FreeCodeCamp/OpenWeather/Thunder.jpg)'
           };
           break;
         }
      default:{
        vm.weatherBackground={
         'background-image': 'url(http://codingtutorials360.com/img/FreeCodeCamp/OpenWeather/sun.jpg)'
          //'background-image':'url(https://images.unsplash.com/photo-1467602472207-e33153d8856f?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=)'
        }
      }
                         }
    
  });
  });
});