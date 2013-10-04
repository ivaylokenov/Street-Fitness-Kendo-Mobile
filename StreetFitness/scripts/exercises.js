(function(global) {
    
    var app = global.app = global.app || {};
    
    var ExercisesListViewModel = kendo.data.ObservableObject.extend({
        exercisesDataSource: null,
        init: function () {
            var that = this;
            
            kendo.data.ObservableObject.fn.init.apply(that, []);
            
            var dataSource = new kendo.data.DataSource({
                transport: {
                    read: {
                        url: "data/exercises.json",
                        dataType: "json"
                    }
                }
            });
            
            that.set("exercisesDataSource", dataSource);
        },
        showDetail: function (e) {
            var that = new ExercisesListViewModel();
            
            var data = that.get("exercisesDataSource");
            
            data.fetch(function() {
                var id = e.view.params.uid;
                var model = data.at(parseInt(id) - 1);
                kendo.bind(e.view.element, model, kendo.mobile.ui);
            });
        },
        showDescription: function() {
            var that = new ExercisesListViewModel();
            
            var data = that.get("exercisesDataSource");
            
            data.fetch(function() {
                var id = parseInt($('#description-container').attr('data-description'));
                var exercise = data.at(parseInt(id) - 1);
                var model = {
                    name: exercise.name,
                    description: exercise.description
                };
                
                kendo.bind($('#exercise-description'), model, kendo.mobile.ui);
                $("#exercise-description").kendoMobileModalView("open");
            });
        },
        closeDescription: function() {
            $("#exercise-description").kendoMobileModalView("close");
        }
    });
    
    app.exercises = {
        viewModel: new ExercisesListViewModel(),
    };
    
})(window);