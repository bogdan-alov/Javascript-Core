function solveSequence(params) {
    let bInd = null;
    let res = [];
    if (params.length > 0) {
        res = params.map(Number).filter((ele, ind, ar) => {
            if (ele >= bInd) {
                bInd = ele;
                return true;
            }
            return false;
        });

    }
    console.log(res.join("\n"));
}