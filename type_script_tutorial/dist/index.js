"use strict";
var _a;
let sales = 182787;
let cource = "sdksldksld";
let is_published = true;
let arrr = [];
let user = [100, 'jshdjhdjsd', true];
var Size;
(function (Size) {
    Size["Small"] = "s";
    Size["Medium"] = "m";
    Size["Large"] = "l";
})(Size || (Size = {}));
;
let MySize = Size.Large;
function my_func(params) {
    return params;
}
let employee = {
    id: 1,
    name: 'Mosh',
    retire: (date) => {
        console.log(date);
    }
};
function KgToLbs(weight) {
    console.log(weight);
}
let measure = 'cm';
function getCustomer(id) {
    return id == 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
//# sourceMappingURL=index.js.map