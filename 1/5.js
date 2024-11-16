/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */

var compareVersion = function (version1, version2) {
    //是否存在标签
    let v1_flag = false;
    let v2_flag = false;
    //记录标签开始出现的位置
    let v1_start;
    let v2_start;

    let v1 = [];
    let v2 = [];
    let tmp = "";

    //v1
    for (let i = 0; i < version1.length; i++) {
        if (version1[i] === '.' || version1[i] === '-' || 
            (tmp === "" && version1[i] === '0' && version1[i+1] !== '.' && version1[i+1] !== '-')
        ) {
            if (tmp === "") {
                continue;
            }
            else 
                v1.push(String(tmp));

            if (version1[i] === '-') {
                v1_flag = true;
                v1_start = v1.length - 1;
            }
            tmp = ""
            continue;
        }
        else {
            tmp += version1[i];
        }
    }
    v1.push(tmp);
    tmp = "";
    //v2
    for (let i = 0; i < version2.length; i++) {
        if (version2[i] === '.' || version2[i] === '-' ||
            (tmp === "" && version2[i] === '0' && version2[i+1] !== '.' && version2[i+1] !== '-')
        ) {
            if (tmp === "") {
                continue;
            }
            else 
                v2.push(String(tmp));
            if (version2[i] === '-') {
                v2_flag = true;
                v2_start = v2.length - 1;
            }
            tmp = ""
            continue;
        }
        else {
            tmp += version2[i];
        }
    }
    v2.push(tmp);
    console.log(v1, v2);
    console.log(v1_flag, v2_flag);

    //比较
    //一方有标签一方没有，有标签小
    if (v1_flag && !v2_flag) {
        return -1;
    }
    else if (!v1_flag && v2_flag) {
        return 1;
    }

    if (!v1_flag && !v2_flag) {
        v1_start = v1.length - 1;
        v2_start = v2.length - 1;
    }

    let i, j;
    // console.log(v1_start, v2_start)

    //比较数字部分
    if (v1_start >= v2_start) {
        for (i = 0, j = 0; i <= v1_start || j <= v2_start; i++, j++) {
            if (j > v2_start) {
                if (Number(v1[i]) == 0) {
                    continue;
                }
                else if (Number(v1[i]) > 0) {
                    return 1;
                }
                else {
                    return -1;
                }
            }
            else {
                if (Number(v1[i]) === Number(v2[j])) {
                    continue;
                }
                else if (Number(v1[i]) > Number(v2[j])) {
                    return 1;
                }
                else {
                    return -1;
                }
            }
        }
    }
    else {
        for (i = 0, j = 0; i <= v1_start || j <= v2_start; i++, j++) {
            if (i > v1_start) {
                if (Number(v2[i]) == 0) {
                    continue;
                }
                else if (Number(v2[i]) > 0) {
                    return -1;
                }
                else {
                    return 1;
                }
            }
            else {
                if (Number(v1[i]) === Number(v2[j])) {
                    continue;
                }
                else if (Number(v1[i]) > Number(v2[j])) {
                    return 1;
                }
                else {
                    return -1;
                }
            }
        }
    }

    //比较标签部分
    i = v1_start + 1;
    j = v2_start + 1;
    if (v1_flag && v2_flag) {
            let m, n;
            for (m = 0, n = 0; m < v1[i].length || n < v2[j].length; m++, n++) {
                if (m < v1[i].length && n < v2[j].length) {
                    if (v1[i][m] === v2[j][n])
                        continue;
                    else if (v1[i][m] > v2[j][n])
                        return 1;
                    else
                        return -1;
                }
                else if (m < v1[i].length && n >= v2[j].length) {
                    return 1;
                }
                else if (m >= v1[i].length && n < v2[j].length) {
                    return -1;
                }
            }
    }
    // console.log(v1, v2);

    return 0;
    
};

console.log(compareVersion( "1.2", "1.10"));
console.log(compareVersion("1.01", "1.001"));
console.log(compareVersion("1.0", "1.0.0.0"));
console.log(compareVersion("1.0.0-alpha", "1.0.0-beta"));
console.log(compareVersion("1.0.0", "1.0.0-alpha"));
console.log(compareVersion("1.10-beta", "1.2-alpha"));