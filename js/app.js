var Cat = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/22252709_010df3379e_z.jpg');
    this.nickName = ko.observableArray(['Bert', 'Charles', 'Denise']);

    this.catLevel = ko.computed(function() {
        if (this.clickCount() < 10) {
            return "New Born";
        } else if (this.clickCount() < 20) {
            return "Infant";
        } else {
            return "Teen";
        }
    }, this);
};

var ViewModel = function() {
    //using this var called self, we can ignore the "with"
    //context in html
    var self = this;

    this.currentCat = ko.observable(new Cat());

    this.incrementCounter = function() {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
        //now the action above will ignore any "with" context set in the html
    };
}

ko.applyBindings(new ViewModel());
