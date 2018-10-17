"use strict";
//jshint esnext:true
var arr = [];
var Element = /** @class */ (function () {
    function Element(priority, data) {
        this.priority = priority;
        this.data = data;
    }
    return Element;
}());
var PriorityQueue = /** @class */ (function () {
    function PriorityQueue(array) {
        if (array === void 0) { array = []; }
        this.array = array;
    }
    PriorityQueue.prototype.displayTree = function () {
        var totalLevels = Math.floor(Math.log2(this.size())) + 1;
        var maxElementsOnLastLevel = Math.pow(2, totalLevels - 1);
        var maxSpaces = maxElementsOnLastLevel * 3 - 1;
        var buffer = [];
        var dataLine = [];
        for (var i = 0; i < this.size(); i++) {
            var element = this.array[i];
            var elementLevel = Math.floor(Math.log2(i + 1)) + 1;
            var nextElementLevel = Math.floor(Math.log2(i + 2)) + 1;
            var spaces = Math.floor(maxSpaces / Math.pow(2, elementLevel - 1));
            var spacesPerSide = Math.floor(spaces / 2);
            var elementPriorityNumberSize = Math.ceil(Math.log10(element.priority)) - 1 || 1;
            var character = void 0;
            if (spacesPerSide - elementPriorityNumberSize < 0) {
                elementPriorityNumberSize = 1;
                character = 'X';
            }
            else {
                character = String(element.priority);
            }
            if (elementLevel !== totalLevels) {
                dataLine = dataLine.concat(Array(spacesPerSide).fill(' '), [
                    character
                ], Array(spacesPerSide + 1 - elementPriorityNumberSize).fill(' '));
            }
            else {
                var areChildrenOfTheSameParent = this.getParentIndex(i) === this.getParentIndex(i + 1);
                dataLine = areChildrenOfTheSameParent ? dataLine.concat(Array(spacesPerSide).fill(' '), [
                    character
                ], Array(spacesPerSide + 2 - elementPriorityNumberSize).fill(' ')) : dataLine.concat(Array(spacesPerSide).fill(' '), [
                    character
                ], Array(spacesPerSide - elementPriorityNumberSize).fill(' '));
            }
            // Line is finished. We transform line to strings
            if (elementLevel !== nextElementLevel) {
                if (elementLevel === totalLevels) {
                    dataLine.shift();
                }
                var arrowsLines = [dataLine];
                var arrowLine = [];
                var nextLevelSpaces = Math.floor(maxSpaces / Math.pow(2, elementLevel - 1));
                var iterationsForLines = Math.floor(spaces / 4);
                for (var j = 0; j < iterationsForLines; j++) {
                    arrowLine = [];
                    for (var k = 0; k <= maxSpaces; k++) {
                        if (arrowsLines[j][k + 1] && arrowsLines[j][k + 1].match(/^\d+|\/|X/)) {
                            arrowLine.push('/');
                        }
                        else if (arrowsLines[j][k - 1] && arrowsLines[j][k - 1].match(/\d+|\\|X/)) {
                            arrowLine.push('\\');
                            var elementPriorityNumberSize_1 = Math.ceil(Math.log10(element.priority)) - 1;
                            arrowLine = arrowLine.concat(Array(elementPriorityNumberSize_1).fill(' '));
                        }
                        else {
                            arrowLine.push(' ');
                        }
                    }
                    arrowsLines.push(arrowLine);
                }
                buffer = buffer.concat(arrowsLines);
                dataLine = [];
            }
        }
        if (dataLine.length) {
            dataLine.shift();
            buffer.push(dataLine);
        }
        console.log(buffer);
        this.printTree(buffer);
    };
    PriorityQueue.prototype.extractMax = function () {
        if (this.size() === 0) {
            return null;
        }
        var max = this.array[0];
        if (this.size() > 1) {
            this.array[0] = this.array[this.size() - 1];
            this.heapify();
        }
        ;
        this.array.pop();
        return max;
    };
    PriorityQueue.prototype.getLeft = function (index) {
        var leftIndex = index * 2 - 1;
        return leftIndex < this.size() ? leftIndex : null;
    };
    PriorityQueue.prototype.getRightIndex = function (index) {
        var rightIndex = index * 2;
        return rightIndex < this.size() ? rightIndex : null;
    };
    PriorityQueue.prototype.getParentIndex = function (index) {
        var parentIndex = Math.floor((index - 1) / 2);
        return parentIndex >= 0 ? parentIndex : null;
    };
    PriorityQueue.prototype.getMax = function () {
        return this.array[0] || null;
    };
    PriorityQueue.prototype.heapify = function (index) {
        if (index === void 0) { index = 0; }
    };
    PriorityQueue.prototype.maintainHeap = function (index) {
        var parentIndex = this.getParentIndex(index);
        if (parentIndex !== null) {
            var parent = this.array[parentIndex];
            var element = this.array[index];
            if (parent && element && parent.priority < element.priority) {
                this.array[parentIndex] = element;
                this.array[index] = parent;
                this.heapify(parentIndex);
            }
        }
    };
    PriorityQueue.prototype.insert = function (element) {
        this.array.push(element);
        this.maintainHeap(this.size() - 1);
    };
    PriorityQueue.prototype.insertMany = function (elements) {
        var _this = this;
        elements.forEach(function (element) {
            _this.insert(element);
        });
    };
    PriorityQueue.prototype.printTree = function (dataBuffer) {
        var consoleBuffer = '';
        for (var i = 0; i < dataBuffer.length; i++) {
            var dataLine = dataBuffer[i];
            for (var j = 0; j < dataLine.length; j++) {
                consoleBuffer += dataLine[j] || ' ';
            }
            console.log(consoleBuffer);
            consoleBuffer = '';
        }
    };
    PriorityQueue.prototype.size = function () {
        return this.array.length;
    };
    return PriorityQueue;
}());
var priority = new PriorityQueue(arr);
priority.insertMany([
    new Element(1, {}),
    new Element(30, {}),
    new Element(12, {}),
    new Element(5, {}),
    new Element(120, {}),
    new Element(11, {}),
    new Element(220, {}),
    new Element(75, {}),
    new Element(33, {}),
    new Element(220, {}),
    new Element(75, {}),
    new Element(33, {}),
]);
// priority.insert(new Element(1, {}));
// priority.displayTree();
// priority.insert(new Element(30, {}));
// priority.displayTree();
// priority.insert(new Element(12, {}), );
// priority.displayTree();
// priority.insert(new Element(120, {}));
priority.displayTree();
// console.log(priority.extractMax());
// console.log(priority.array);
