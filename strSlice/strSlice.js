function nameSlice(start, end) {
    var name = "Dimitris";
    var slicedName = name.slice(start, end); // Use the start and end parameters for slicing
    console.log(slicedName);
}

module.exports = { nameSlice }; // Export the nameSlice function
