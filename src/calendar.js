xtag.register('calendar', {
    onCreate: function(){
        // fired once at the time a component
        // is initially created or parsed
    },
    onInsert: function(){
        // fired each time a component
        // is inserted into the DOM
    },
    events: {
        'click:delegate(x-toggler)': function(){
            // activate a clicked toggler
        }
    },
    getters: {
        'togglers': function(){
            // return all toggler children
        }
    },
    setters: {
        // Add DOM object setters
    },
    methods: {
        nextToggler: function(){
            // activate next toggler
        },
        previousToggler: function(){
            // activate the previous toggler
        }
    }
});