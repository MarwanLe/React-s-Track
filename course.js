let data = {
	meta: {
		totalPages: 13,
	},
	data: [
		{
			type: "articles",
			id: "3",
			attributes: {
				title: "JSON:API paints my bikeshed!",
				body: "The shortest article. Ever.",
				created: "2015-05-22T14:56:29.000Z",
				updated: "2015-05-22T14:56:28.000Z",
			},
		},
		{
			type: "articles",
			id: "3",
			attributes: {
				title: "JSON:API paints my bikeshed!",
				body: "The shortest article. Ever.",
				created: "2015-05-22T14:56:29.000Z",
				updated: "2015-05-22T14:56:28.000Z",
			},
		},
		{
			type: "articles",
			id: "3",
			attributes: {
				title: "JSON:API paints my bikeshed!",
				body: "The shortest article. Ever.",
				created: "2015-05-22T14:56:29.000Z",
				updated: "2015-05-22T14:56:28.000Z",
			},
		},
		{
			type: "articles",
			id: "3",
			attributes: {
				title: "JSON:API paints my bikeshed!",
				body: "The shortest article. Ever.",
				created: "2015-05-22T14:56:29.000Z",
				updated: "2015-05-22T14:56:28.000Z",
			},
		},
		{
			type: "articles",
			id: "3",
			attributes: {
				title: "JSON:API paints my bikeshed!",
				body: "The shortest article. Ever.",
				created: "2015-05-22T14:56:29.000Z",
				updated: "2015-05-22T14:56:28.000Z",
			},
		},
	],
	links: {
		self: "http://example.com/articles?page[number]=3&page[size]=1",
		first: "http://example.com/articles?page[number]=1&page[size]=1",
		prev: "http://example.com/articles?page[number]=2&page[size]=1",
		next: "http://example.com/articles?page[number]=4&page[size]=1",
		last: "http://example.com/articles?page[number]=13&page[size]=1",
	},
};

// get totalPages --> 5
// show self & first beside each other
// check if totalPages is equal to data length --> 5
// get the title of the data before the last one
// check if post id is less than 3 and type is articles



// 1
let totalPages = data.meta.totalPages;
	console.log(totalPages);



// 2
let Self_Link = data.links.self;
	let First_Link = data.links.first;
	console.log(Self_Link + First_Link);



// 3
let IfTotalPagesIsEqualToDataLength = totalPages === data.length;
console.log(IfTotalPagesIsEqualToDataLength)



// 4
let Path = data.data[data.data.length - 2].attributes.title;
console.log(Path);



// 5
let IfPostIdIsLessThan3AndTypeIsArticles = data.data[0].id < 3 && data.data[0].type === "articles";
console.log(IfPostIdIsLessThan3AndTypeIsArticles);









// Task one

let IfPostIdIsLessThan3 = data.data[0].id
let TypeIsArticles = data.data[0].type

// if ((IfPostIdIsLessThan3 < 3) && (TypeIsArticles === "articles")) { //False + true
// 	console.log("Pinned Article")
// }


if (IfPostIdIsLessThan3 = 3) {
	if (TypeIsArticles === "articles") {
		console.log("Pinned Article")
	}
}




// Task two

// if (!(totalPages === data.length)) { //FALSE
// 	console.log("inValid Data")
// }



// let code = undefined;

// if (true) {
// 	code = 5;
// }

// console.log(code);








