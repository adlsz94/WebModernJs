//* 128
/**
 *? JSON 
 *? What is JSON?
 * JSON stands for JavaScript Object Notation
 * JSON is a text format for storing and transporting data.
 * JSON is "self-describing" and easy to understand.
 * JSON is a lightweight data-interchange format
 * JSON is plain text written in JavaScript object notation
 * JSON is used to send data between computers
 * JSON is language independent
 * 
 ** OBS: The JSON syntax is derived from JavaScript object notation, but the JSON format is text only.
 * Code for reading and generating JSON exists in many programming languages.
 * 
 ** The JSON format was originally specified by Douglas Crockford.
 * 
 ** JavaScript has a built in function for converting JSON strings into JavaScript objects:
 *TODO: JSON.parse()
 * 
 ** JavaScript also has a built in function for converting an object into a JSON string:
 *TODO: JSON.stringify()
 * 
 * You can receive pure text from a server and use it as a JavaScript object.
 * You can send a JavaScript object to a server in pure text format.
 * You can work with data as JavaScript objects, with no complicated parsing and translations
 * 
 *? Storing Data
 * When storing data, the data has to be a certain format, and regardless of where you choose to store it,
 * text is always one of the legal formats.
 * JSON makes it possible to store JavaScript objects as text.
 * 
 *? JSON Syntax
 * The JSON syntax is a subset of the JavaScript syntax.
 * 
 *? JSON Syntax Rules
 ** JSON syntax is derived from JavaScript object notation syntax:
 ** Data is in name/value pairs
 ** Data is separated by commas ( , )
 ** Curly braces hold objects 
 ** Square brackets hold arrays
 * 
 *? JSON Data - A Name and a Value
 * JSON data is written as name/value pairs (aka key/value pairs).
 * A name/value pair consists of a field name (in double quotes " ") - "name", followed by a colon (:), followed by a value ("John"):
 * Example:
 **  "name":"John"
 * 
 *! JSON names require double quotes (" ").
 * 
 * JSON - Evaluates to JavaScript Objects
 * The JSON format is almost identical to JavaScript objects.
 * 
 ** In JSON, keys must be strings, written with double quotes:
 * 
 *? JSON
 ** {"name":"John"}
 * 
 ** In JavaScript, keys can be strings, numbers, or identifier names:
 * 
 *? JavaScript
 ** {name:"John"}
 * 
 *? JSON Values
 * 
 *! In JSON, values must be one of the following data types:
 ** a string
 ** a number
 ** an object
 ** an array
 ** a boolean
 ** null
 * 
 *! In JavaScript values can be all of the above, plus any other valid JavaScript expression, including:
 ** a function
 ** a date
 ** undefined
 * 
 *! In JSON, string values must be written with double quotes("John"):
 * 
 ** JSON
 ** {"name":"John"}
 * 
 *! In JavaScript, you can write string values with double or single quotes:
 * 
 ** JavaScript
 ** {name: "John"} or {name:'John'} 
 * 
 *? JavaScript Objects
 * Because JSON syntax is derived from JavaScript object notation, very little extra 
 * software is needed to work with JSON within JavaScript.
 * With JavaScript you can create an object and assign data to it, like this:
 * 
 ** Example
 **person = {name:"John", age:31, city:"New York"};
 * 
 *TODO: You can access a JavaScript object like this:
 * 
 ** Example
 * // returns John
 ** person.name;
 * 
 *TODO: It can also be accessed like this:
 * 
 ** Example
 * // returns John
 ** person["name"];
 * 
 *TODO: Data can be modified like this:
 * 
 ** Example
 ** person.name = "Gilbert";
 * 
 *TODO: It can also be modified like this:
 * 
 ** Example
 ** person["name"] = "Gilbert";
 * 
 *? JavaScript Arrays as JSON
 * The same way JavaScript objects can be written as JSON, JavaScript arrays can also be written as JSON.
 * 
 *? JSON Files
 ** The file type for JSON files is ".json"
 ** The MIME type for JSON text is "application/json"
 * 
 *TODO: See the link: https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
 * 
 *? JSON vs XML
 * 
 * Both JSON and XML can be used to receive data from a web server.
 * The following JSON and XML examples both define an employees object, with an array of 3 employees:
 * 
 ** JSON Example
 * 
 ** {"employees":[
 **   { "firstName":"John", "lastName":"Doe" },
 **   { "firstName":"Anna", "lastName":"Smith" },
 **   { "firstName":"Peter", "lastName":"Jones" }
 ** ]}
 * 
 ** XML Example
 * 
 ** <employees>
 **   <employee>
 **     <firstName>John</firstName> <lastName>Doe</lastName>
 **   </employee>
 **   <employee>
 **     <firstName>Anna</firstName> <lastName>Smith</lastName>
 **   </employee>
 **   <employee>
 **     <firstName>Peter</firstName> <lastName>Jones</lastName>
 **   </employee>
 ** </employees>
 * 
 *? JSON is Like XML Because
 * Both JSON and XML are "self describing" (human readable)
 * Both JSON and XML are hierarchical (values within values)
 * Both JSON and XML can be parsed and used by lots of programming languages
 * Both JSON and XML can be fetched with an XMLHttpRequest
 * 
 *? JSON is Unlike XML Because
 * JSON doesn't use end tag
 * JSON is shorter
 * JSON is quicker to read and write
 * JSON can use arrays
 * 
 *? The biggest difference is:
 ** XML has to be parsed with an XML parser. JSON can be parsed by a standard JavaScript function.
 * 
 *? Why JSON is Better Than XML
 * 
 ** XML is much more difficult to parse than JSON.
 ** JSON is parsed into a ready-to-use JavaScript object.
 * 
 *? For AJAX applications, JSON is faster and easier than XML:
 * 
 *? Using XML
 ** Fetch an XML document
 ** Use the XML DOM to loop through the document
 ** Extract values and store in variables
 * 
 *? Using JSON
 ** Fetch a JSON string
 ** JSON.Parse the JSON string
 * 
 *? JSON Data Types
 * 
 *? Valid Data Types
 * In JSON, values must be one of the following data types:
 ** a string
 ** a number
 ** an object (JSON object)
 ** an array
 ** a boolean
 ** null
 ** 
 *! JSON values cannot be one of the following data types:
 ** a function
 ** a date
 ** undefined
 * 
 *? JSON Strings
 * Strings in JSON must be written in double quotes.
 * 
 ** Example
 ** {"name":"John"}
 * 
 *? JSON Numbers
 * Numbers in JSON must be an integer or a floating point.
 * 
 ** Example
 ** {"age":30}
 * 
 *? JSON Objects
 * Values in JSON can be objects.
 * 
 ** Example
 ** {
 ** "employee":{"name":"John", "age":30, "city":"New York"}
 ** }
 * 
 *! Objects as values in JSON must follow the JSON syntax.
 * 
 *? JSON Arrays
 * Values in JSON can be arrays.
 * 
 ** Example
 ** {
 ** "employees":["John", "Anna", "Peter"]
 ** }
 * 
 *? JSON Booleans
 * Values in JSON can be true/false.
 * 
 ** Example
 * *{"sale":true}
 * 
 *? JSON null
 * Values in JSON can be null.
 * 
 ** Example
 ** {"middlename":null}
 * 
 */

const obj = {
    a: 1, 
    b: 2,
    c: 3,
    soma() {
        return a + b + c
    }
}

//TODO: O método JSON.stringify() Converte o obj para formato JSON.
console.log(JSON.stringify(obj)) // return {"a":1,"b":2,"c":3} - formato de texto JSON.
//! OBS: Não retornará a função.

// TODO: O método JSON.parse() converte o JSON para objeto JS
console.log(JSON.parse('{"a": 1,"b": 2,"c": 3}')) //* Return { a: 1, b: 2, c: 3 } - em formato de objeto.
console.log(JSON.parse('{"a": 1,"b": "string","c": true, "d": {}, "e": []}')) //* return { a: 1, b: 'string', c: true, d: {}, e: [] }

/**
 *? Example - Parsing JSON
 * Imagine we received this text from a web server:
 * 
 ** '{"name":"John", "age":30, "city":"New York"}'
 */

//TODO: Use the JavaScript function JSON.parse() to convert text into a JavaScript object:
const pessoa = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
console.log(pessoa) //* Returns a JavaScript object { name: 'John', age: 30, city: 'New York' }
 
/**
 *? Array as JSON
 * When using the JSON.parse() on a JSON derived from an array, 
 * the method will return a JavaScript array, instead of a JavaScript object.
 */
const text = '["Ford", "BMW", "Audi", "Fiat"]';
const myArr = JSON.parse(text);
console.log(myArr)//* return ["Ford", "BMW", "Audi", "Fiat"]
console.log(typeof(myArr))

/**
 *? Exceptions
 *? Parsing Dates
 *! Date objects are not allowed in JSON.
 *TODO: If you need to include a date, write it as a string.
 * TODO: You can convert it back into a date object later:
 */
const text2 = '{"name":"Josué", "birth":"1986-12-14", "city":"Vitoria"}';
const obj2 = JSON.parse(text2, function(key, value) {
    if (key == 'birth') {
        return new Date(value);
    }else{
        return value;
    }
} );
obj2.birth = new Date(obj2.birth);
console.log(obj2)


/**
 *TODO: See the link: https://www.w3schools.com/js/js_json_parse.asp
 * 
 * A common use of JSON is to exchange data to/from a web server.
 * When receiving data from a web server, the data is always a string.
 * Parse the data with JSON.parse(), and the data becomes a JavaScript object.
 * 
 *? Example - Parsing JSON
 * Imagine we received this text from a web server:
 * '{"name":"John", "age":30, "city":"New York"}'
 *TODO: Use the JavaScript function JSON.parse() to convert text into a JavaScript object:
 * 
 * const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
 * 
 *! Make sure the text is in JSON format, or else you will get a syntax error
 * 
 *? JSON Strings
 * Strings in JSON must be written in double quotes.
 * Example
 * {"name":"John"}
 * 
 *? JSON Numbers
 * Numbers in JSON must be an integer or a floating point.
 * Example
 * {"age":30}
 * 
 *? JSON Objects
 * Values in JSON can be objects.
 * Example
 * {
 * "employee":{"name":"John", "age":30, "city":"New York"}
 * }
 * 
 *! Objects as values in JSON must follow the JSON syntax.
 * 
 /*
 *? JSON Arrays
 * Values in JSON can be arrays.
 * Example
 * {
 * "employees":["John", "Anna", "Peter"]
 * }
 * /
 *? JSON Booleans
 * Values in JSON can be true/false.
 * Example
 * {"sale":true}
 * 
 *? JSON null
 * Values in JSON can be null.
 * Example
 * {"middlename":null}
 * 
 */