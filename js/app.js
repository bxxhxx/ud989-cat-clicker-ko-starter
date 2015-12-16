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
    this.currentCat = ko.observable(new Cat());
    this.incrementCounter = function() {
        this.currentCat().clickCount(this.currentCat().clickCount() + 1);
    };
}

ko.applyBindings(new ViewModel());
