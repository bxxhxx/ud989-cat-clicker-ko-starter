var ViewModel = function() {

    var self = this;

    self.clickCount = ko.observable(0);
    self.name = ko.observable('Tabby');
    self.imgSrc = ko.observable('img/22252709_010df3379e_z.jpg');

    self.incrementCounter = function() {
        self.clickCount(self.clickCount() + 1);
    };

    self.catLevel = ko.computed(function() {
        if (self.clickCount() < 10) {
            return "New Born";
        } else if (self.clickCount() < 20) {
            return "Infant";
        } else {
            return "Teen";
        }
    }, self);
};

self.nickName = ko.observableArray([{
    name: 'Bert'
}, {
    name: 'Charles'
}, {
    name: 'Denise'
}]);

ko.applyBindings(new ViewModel());
