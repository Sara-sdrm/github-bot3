const model = require('./model.js');

const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');

const FILE_PATH = './data.json'

const DATE = moment().format();


console.log(DATE);

const data = {
    date: DATE,
    test: 'rehman' + Math.random()
}

jsonfile.writeFile(FILE_PATH,data, () =>{
    simpleGit().add([FILE_PATH]).commit(DATE+Math.random(), {'--date': DATE }).push();
});


var matrix = new Array(7).fill(0).map(() => new Array(52).fill(0));

var count = 0;
for (var i = 0; i < 52; i++) {
    if (i + 1 % 6 == 0) {
        count += 7;
        continue;
    };

    if (i < 5) {
        let k = i % 6;
        for (var j = 0; j < 7; j++) {
            if (model.R()[j][k] == 1) {
                matrix[j][i] = moment().subtract(1, 'y').add(count, 'd').format();
            }
            count++;
        }
    }

    else if (i > 5 && i < 11) {
        let k = i % 6;
        for (var j = 0; j < 7; j++) {
            if (model.E()[j][k] == 1) {
                matrix[j][i] = moment().subtract(1, 'y').add(count, 'd').format();
            }
            count++;
        }
    }

    else if (i > 11 && i < 17) {
        let k = i % 6;
        for (var j = 0; j < 7; j++) {
            if (model.H()[j][k] == 1) {
                matrix[j][i] = moment().subtract(1, 'y').add(count, 'd').format();
            }
            count++;
        }
    }

    else if (i > 17 && i < 23) {
        let k = i % 6;
        for (var j = 0; j < 7; j++) {
            if (model.M()[j][k] == 1) {
                matrix[j][i] = moment().subtract(1, 'y').add(count, 'd').format();
            }
            count++;
        }
    }

    else if (i > 23 && i < 29) {
        let k = i % 6;
        for (var j = 0; j < 7; j++) {
            if (model.A()[j][k] == 1) {
                matrix[j][i] = moment().subtract(1, 'y').add(count, 'd').format();
                
            }
            count++;
        }
    }
    else if (i > 23 && i < 29) {
        let k = i % 6;
        for (var j = 0; j < 7; j++) {
            if (model.N()[j][k] == 1) {
                matrix[j][i] = moment().subtract(1, 'y').add(count, 'd').format();
            }
            count++;
        }
    }

}

// for(var i = 0; i < 5; i++) {
//     for(var j = 0; j < 7; j++) {
//         // matrix[j][i] = moment().subtract(1, 'y').add(count++,'d').format();
//         if(i==0 ||
//             j==0 ||
//             j == 3 ||
//             (i==4 && j<4) ||
//             (i==2 && j==4) ||
//             (i==3 && j==5) ||
//             (i==4 && j==6)
//             ){
//                 E[j][i] = 1;
//             } 

//     }
// }


// for(var i = 0;i<52;i++){
//     for(var j=0;j<7;j++){
//         if(matrix[j][i] !== 0){
//             console.log(matrix[j][i])
//             simpleGit().add([FILE_PATH]).commit(matrix[j][i]+Math.random(), {'--date': matrix[j][i] }).push();
//         }
//     }
// }
