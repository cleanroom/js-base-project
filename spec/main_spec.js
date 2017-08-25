"use strict";
var chai = require("chai");
var expect = chai.expect;

describe("map reduce", function(){
    before(function () {
        Array.prototype.reduce = function(fn, initialValue) {
            var result = initialValue;
            for (var i in this) {
                result = fn(result, this[i]);
            }
            return result;
        };

        Array.prototype.map = function (fn) {
            return this.reduce(function(result, item) {
                result.push(fn(item));
                return result;
            }, []);
        }
    });

    it("should reduce", function () {
        var arr = [1, 2, 3];
        var result = arr.reduce(function(sum, number) {
            return sum + number;
        }, 0);
        expect(result).to.equal(6);
    });

    it("should map", function(){
        var arr = [1, 2, 3];
        var result = arr.map(function (number) {
            return number * 2;
        });

        expect(result).to.deep.equal([2, 4, 6]);
    });
});