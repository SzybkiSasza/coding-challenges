//jshint esnext:true

const arr = [];

class Element {
    constructor(priority, data) {
        this.priority = priority;
        this.data = data;
    }
}

class PriorityQueue {
    constructor(array = []) {
        this.array = array;
    }

    displayTree() {
        const totalLevels = Math.floor(Math.log2(this.size())) + 1;
        const maxElementsOnLastLevel = Math.pow(2, totalLevels - 1);
        const maxSpaces = maxElementsOnLastLevel * 3 - 1;

        let buffer = [];
        let dataLine = [];
        for (let i = 0; i < this.size(); i++) {
            const element = this.array[i];
            const elementLevel = Math.floor(Math.log2(i + 1)) + 1;
            const nextElementLevel = Math.floor(Math.log2(i + 2)) + 1;
            const spaces = Math.floor(maxSpaces / Math.pow(2, elementLevel - 1));

            const spacesPerSide = Math.floor(spaces / 2);
            let elementPriorityNumberSize = Math.ceil(Math.log10(element.priority)) - 1 || 1;

            let character;
            if (spacesPerSide - elementPriorityNumberSize < 0) {
                elementPriorityNumberSize = 1;
                character = 'X';
            } else {
                character = String(element.priority);
            }

            if (elementLevel !== totalLevels) {
                dataLine = [
                    ...dataLine,
                    ...Array(spacesPerSide).fill(' '),
                    character,
                    ...Array(spacesPerSide + 1 - elementPriorityNumberSize).fill(' ')
                ];
            } else {
                const areChildrenOfTheSameParent =
                    this.getParentIndex(i) === this.getParentIndex(i + 1);

                dataLine = areChildrenOfTheSameParent ? [
                    ...dataLine,
                    ...Array(spacesPerSide).fill(' '),
                    character,
                    ...Array(spacesPerSide + 2 - elementPriorityNumberSize).fill(' ')
                ] : [
                    ...dataLine,
                    ...Array(spacesPerSide).fill(' '),
                    character,
                    ...Array(spacesPerSide - elementPriorityNumberSize).fill(' ')
                ]
            }

            // Line is finished. We transform line to strings
            if (elementLevel !== nextElementLevel) {
                if (elementLevel === totalLevels) {
                    dataLine.shift();
                }
                let arrowsLines = [dataLine];
                let arrowLine = [];

                const nextLevelSpaces = Math.floor(maxSpaces / Math.pow(2, elementLevel - 1));
                let iterationsForLines = Math.floor(spaces / 4);

                for (let j = 0; j < iterationsForLines; j++) {
                    arrowLine = [];
                    for (let k = 0; k <= maxSpaces; k++) {
                        if (arrowsLines[j][k + 1] && arrowsLines[j][k + 1].match(/^\d+|\/|X/)) {
                            arrowLine.push('/');
                        } else if (arrowsLines[j][k - 1] && arrowsLines[j][k - 1].match(/\d+|\\|X/)) {
                            arrowLine.push('\\');

                            const elementPriorityNumberSize = Math.ceil(Math.log10(element.priority)) - 1;
                            arrowLine= [...arrowLine, ...Array(elementPriorityNumberSize).fill(' ')];
                        } else {
                            arrowLine.push(' ');
                        }
                    }

                    arrowsLines.push(arrowLine);
                }

                buffer = [...buffer, ...arrowsLines]

                dataLine = [];
            }
        }

        if (dataLine.length) {
            dataLine.shift();
            buffer.push(dataLine);
        }

        console.log(buffer);

        this.printTree(buffer);
    }

    extractMax() {
        if (this.size() === 0) {
            return null;
        }

        const max = this.array[0];

        if (this.size() > 1) {
            this.array[0] = this.array[this.size() - 1];
            this.heapify();
        };

        this.array.pop();

        return max;
    }

    getLeft(index) {
        const leftIndex = index * 2 - 1;

        return leftIndex < this.size() ? leftIndex : null;
    }

    getRightIndex(index) {
        const rightIndex = index * 2;

        return rightIndex < this.size() ? rightIndex : null;
    }

    getParentIndex(index) {
        const parentIndex = Math.floor((index - 1) / 2);

        return parentIndex >= 0 ? parentIndex : null;
    }

    getMax() {
        return this.array[0] || null;
    }

    heapify(index = 0) {

    }

    maintainHeap(index) {
        const parentIndex = this.getParentIndex(index);
        if (parentIndex !== null) {
            const parent = this.array[parentIndex];
            const element = this.array[index];

            if (parent && element && parent.priority < element.priority) {
                this.array[parentIndex] = element;
                this.array[index] = parent;

                this.heapify(parentIndex);
            }
        }
    }

    insert(element) {
        this.array.push(element);

        this.maintainHeap(this.size() - 1);
    }

    insertMany(elements) {
        elements.forEach(element => {
            this.insert(element);
        });
    }

    printTree(dataBuffer) {
        let consoleBuffer = '';
        for (let i = 0; i < dataBuffer.length; i++) {
            const dataLine = dataBuffer[i];
            for (let j = 0; j < dataLine.length; j++) {
                consoleBuffer += dataLine[j] || ' ';
            }

            console.log(consoleBuffer);
            consoleBuffer = '';
        }
    }

    size() {
        return this.array.length;
    }
}

const priority = new PriorityQueue(arr);

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
    /*   new Element(30, {}),
      new Element(12, {}),
      new Element(5, {}),
      new Element(120, {}),
      new Element(11, {}),
      new Element(220, {}),
      new Element(75, {}),
      new Element(33, {}),
      new Element(220, {}),
      new Element(75, {}),
      new Element(33, {}), */
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
