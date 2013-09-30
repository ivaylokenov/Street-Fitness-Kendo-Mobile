(function(global) {  
    var WeatherViewModel,
        app = global.app = global.app || {};
    
    WeatherViewModel = kendo.data.ObservableObject.extend({
        weatherDataSource: null,
        
        init: function () {
            var that = this,
                dataSource;
            
            kendo.data.ObservableObject.fn.init.apply(that, []);
            
            dataSource = new kendo.data.DataSource({
                transport: {
                    read: {
                        url: "data/weather.json",
                        dataType: "json"
                    }
                }
            });
            
            that.set("weatherDataSource", dataSource);           
        }        
    });  
    
    app.weatherService = {
        viewModel: new WeatherViewModel()
    };
})(window);