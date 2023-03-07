// var demoText = 'doAn Van bI SaI cHinh ta. suA lAi chO DunG.'


// function fixText(text) {                                 // tạo hàm sửa chính tả
//     var text1 = demoText.toLowerCase()                   // chuyển tất cả kí tự thành chữ thường
//     var sentences = text1.split('. ')                    // cắt chuỗi thành mảng, mỗi phần tử là 1 câu
//     var fixedText = ''
//     for(var i=0; i<sentences.length ;i++ ){                                           // lặp từng phần tử mảng
//         var sentence = (sentences[i])                                                 //
//         var fixedSentence = sentence.replace(sentence[0],sentence[0].toUpperCase())   // thay kí tự đầu thành kí tự hoa
//         if(i>0){                                                                      // điều kiện để thêm dấu chấm câu
//             fixedText = fixedText + '. ' + fixedSentence                              
//         } else fixedText = fixedText + fixedSentence                                  
//     }
//     return fixedText
// }

// console.log(demoText)
// console.log('đoạn văn sau khi sửa: ' + fixText(demoText))
function fix() {
    var demoText = document.getElementById('input').value
    var text1 = demoText.toLowerCase()
    var sentences = text1.split('. ')
    var fixedText = ''
    for(var i=0; i<sentences.length ;i++ ){
        var sentence = (sentences[i])
        var fixedSentence = sentence.replace(sentence[0],sentence[0].toUpperCase())
        if(i>0){
            fixedText = fixedText + '. ' + fixedSentence
        } else fixedText = fixedText + fixedSentence
    }    
    var rs = document.getElementById('output')
    rs.innerHTML = 'đoạn văn đã sửa: ' + fixedText
}