let names = ["Marie","Alex","Elena","Dimitri"];
let ages = [22,31,45,53];
let nameAge = [];
for (let i = 0; i < names.length; i++) {
    const age = ages[i];
    result.push('${names[i]} ${age}')
};
console.log(result);
