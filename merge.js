const PDFMerger = require("pdf-merger-js")
var merge = new PDFMerger();
// (
//     async (pdf_1,pdf_2)=>{
//         await merge.add(pdf_1);
//         await merge.add(pdf_2,2);
//         await merge.save("MergedPDF.pdf")
//     }
// )();


const mergePDF_Function = async(pdf_1,pdf_2)=>{
    await merge.add(pdf_1)
    await merge.add(pdf_2)
    let d = new Date().getTime()
    await merge.save(`public/${d}.pdf`)
    return d;
}

module.exports =  {mergePDF_Function}

