function scoreChecker(score) {
    let result;
    if(score >= 90){
        result = "Selamat! Anda mendapatkan nilai A.";
    } else if( score <= 89 && score > 79){
        result = "Anda mendapatkan nilai B.";
    } else if( score <= 79 && score > 69 ){
        result = "Anda mendapatkan nilai C.";
    } else if( score <= 69 && score > 59){
        result = "Anda mendapatkan nilai D.";
    }else if (score < 60){
        result = "Anda mendapatkan nilai E.";
    }
    // Jangan hapus kode ini
    return result;
}
console.log(scoreChecker(79));

/**
 * Jangan hapus kode di bawah ini
 */
module.exports = scoreChecker;