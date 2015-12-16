var initialCats = [{
    clickCount: 0,
    name: 'Tabby',
    imgSrc: 'img/434164568_fea0ad4013_z.jpg',
    imgAttribution: 'https://www.flickr.com/photos/bigtallguy/434164568',
    nickName: ['Bert', 'Charles', 'Denise']
}, {
    clickCount: 0,
    name: 'Tiger',
    imgSrc: 'img/4154543904_6e2428c421_z.jpg',
    imgAttribution: 'https://www.flickr.com/photos/xshamx/4154543904',
    nickName: ['Trouble']
}, {
    clickCount: 0,
    name: 'Scaredy',
    imgSrc: 'img/22252709_010df3379e_z.jpg',
    imgAttribution: 'https://www.flickr.com/photos/kpjas/22252709',
    nickName: ['DeeDee']
}, {
    clickCount: 0,
    name: 'Shadow',
    imgSrc: 'img/1413379559_412a540d29_z.jpg',
    imgAttribution: 'https://www.flickr.com/photos/malfet/1413379559',
    nickName: ['Shad']
}, {
    clickCount: 0,
    name: 'Sleepy',
    imgSrc: 'img/9648464288_2516b35537_z.jpg',
    imgAttribution: 'https://www.flickr.com/photos/onesharp/9648464288',
    nickName: ['snooz']
}];


var Cat = function(data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.nickName = ko.observableArray(data.nickName);

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

    this.catList = ko.observableArray([]);

    initialCats.forEach(function(catItem) {
        self.catList.push(new Cat(catItem));
    });

    this.currentCat = ko.observable(this.catList()[0]);

    this.incrementCounter = function() {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
        //now the action above will ignore any "with" context set in the html
    };

    //it recieves a data object (which is clickedCat here)
    //and then injects it as the new current cat
    this.setCat = function(clickedCat) {
        self.currentCat(clickedCat);

    };
};

ko.applyBindings(new ViewModel());
