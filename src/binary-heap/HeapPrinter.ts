import { BinaryHeap } from './BinaryHeap';

export class HeapPrinter {
    public static displayTree(heap: BinaryHeap) {
        const totalLevels = Math.floor(Math.log2(heap.size())) + 1;
        const maxElementsOnLastLevel = Math.pow(2, totalLevels - 1);
        const maxSpaces = maxElementsOnLastLevel * 3 - 1;

        let buffer: string[][] = [];
        let dataLine: string[] = [];
        for (let i = 0; i < heap.size(); i++) {
            const element = heap.element(i);
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
                    ...Array(spacesPerSide + 1 - elementPriorityNumberSize).fill(' '),
                ];
            } else {
                const areChildrenOfTheSameParent =
                    heap.getParentIndex(i) === heap.getParentIndex(i + 1);

                dataLine = areChildrenOfTheSameParent ? [
                    ...dataLine,
                    ...Array(spacesPerSide).fill(' '),
                    character,
                    ...Array(spacesPerSide + 2 - elementPriorityNumberSize).fill(' '),
                ] : [
                    ...dataLine,
                    ...Array(spacesPerSide).fill(' '),
                    character,
                    ...Array(spacesPerSide - elementPriorityNumberSize).fill(' '),
                ];
            }

            // Line is finished. We transform line to strings
            if (elementLevel !== nextElementLevel) {
                if (elementLevel === totalLevels) {
                    dataLine.shift();
                }
                const arrowsLines: string[][] = [dataLine];
                let arrowLine = [];

                const nextLevelSpaces = Math.floor(maxSpaces / Math.pow(2, elementLevel - 1));
                const iterationsForLines = Math.floor(spaces / 4);

                for (let j = 0; j < iterationsForLines; j++) {
                    arrowLine = [];

                    for (let k = 0; k <= maxSpaces; k++) {
                        if (arrowsLines[j][k + 1] && arrowsLines[j][k + 1].match(/^\d+|\/|X/)) {
                            arrowLine.push('/');
                        } else if (arrowsLines[j][k - 1] &&
                            arrowsLines[j][k - 1].match(/\d+|\\|X/)) {
                            arrowLine.push('\\');

                            const elementPriorityNumberSize =
                                Math.ceil(Math.log10(element.priority)) - 1;
                            arrowLine =
                                [...arrowLine, ...Array(elementPriorityNumberSize).fill(' ')];
                        } else {
                            arrowLine.push(' ');
                        }
                    }

                    arrowsLines.push(arrowLine);
                }

                buffer = [...buffer, ...arrowsLines];

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

    private static printTree(dataBuffer: string[][]) {
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
}
