// export {R, E, H, M, A, N};  

var R = new Array(7).fill(0).map(() => new Array(5).fill(0));
var E = new Array(7).fill(0).map(() => new Array(5).fill(0));
var H = new Array(7).fill(0).map(() => new Array(5).fill(0));
var M = new Array(7).fill(0).map(() => new Array(5).fill(0));
var A = new Array(7).fill(0).map(() => new Array(5).fill(0));
var N = new Array(7).fill(0).map(() => new Array(5).fill(0));

for(var i = 0; i < 5; i++) {
    for(var j = 0; j < 7; j++) {
        // matrix[j][i] = moment().subtract(1, 'y').add(count++,'d').format();
        if(i==0 ||
            j==0 ||
            j == 3 ||
            (i==4 && j<4) ||
            (i==2 && j==4) ||
            (i==3 && j==5) ||
            (i==4 && j==6)
            ){
                R[j][i] = 1;
            } 

    }
}

for(var i = 0; i < 5; i++) {
    for(var j = 0; j < 7; j++) {
        // matrix[j][i] = moment().subtract(1, 'y').add(count++,'d').format();
        if(i==0 ||
            j==0 ||
            j == 3 ||
            j == 6
            ){
                E[j][i] = 1;
            } 

    }
}

for(var i = 0; i < 5; i++) {
    for(var j = 0; j < 7; j++) {
        // matrix[j][i] = moment().subtract(1, 'y').add(count++,'d').format();
        if(i==0 ||
            j==3 ||
            i == 4
            ){
                H[j][i] = 1;
            } 

    }
}

for(var i = 0; i < 5; i++) {
    for(var j = 0; j < 7; j++) {
        // matrix[j][i] = moment().subtract(1, 'y').add(count++,'d').format();
        if(i==0 ||
            i == 4 ||
            (j == 1 && (i==1 | i==3)) ||
            (j == 2 && i == 2)
            ){
                M[j][i] = 1;
            } 

    }
}

for(var i = 0; i < 5; i++) {
    for(var j = 0; j < 7; j++) {
        // matrix[j][i] = moment().subtract(1, 'y').add(count++,'d').format();
        if(i==0 ||
            i == 4 ||
            j == 0 ||
            j == 3
            ){
                A[j][i] = 1;
            } 

    }
}

for(var i = 0; i < 5; i++) {
    for(var j = 0; j < 7; j++) {
        // matrix[j][i] = moment().subtract(1, 'y').add(count++,'d').format();
        if(i==0 ||
            i == 4 ||
            j == 0 ||
            (i==1 && j==1) ||
            (i ==2 && j>=2 && j<=4) ||
            (i==3 && j==5)
        ){
                N[j][i] = 1;
            } 

    }
}

exports.A = () => A;
exports.R = () => R;
exports.E = () => E;
exports.H = () => H;
exports.M = () => M;
exports.N = () => N;
