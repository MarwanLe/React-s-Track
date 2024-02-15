// Bubble sort using for loop

let Array = [1, 3, 7, 4, 2, 8, 5, 6]; //Unsorted Array

function bubbleSort(Array) {

	let pos1 = undefined;
	let pos2 = undefined;

	let isSwapped = false;

	for (pos1 = 0; pos1 < Array.length; pos1 += 1) {

		for (pos2 = 0; pos2 < (Array.length - pos1 - 1); pos2 += 1) {
			if (Array[pos2] > Array[pos2 + 1]) {
				Array[pos2] = Array[pos2 + 1];
				Array[pos2 + 1] = Array[pos2];
				isSwapped = true;
			}
		}

		if (!(isSwapped)) {
			break;
		}
	}

	console.log(Array)
}

bubbleSort(Array)

// bubble sort using 