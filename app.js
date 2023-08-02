const express = require("express")
const app = express()

const path = require("path")
const multer = require("multer")
const upload = multer({ dest: "upload/" }) //upload folder will be automaticaly created by multer
const mergePDF_Function = require("./merge")

app.use('/static', express.static('public'))
// app.use('/static', express.static(path.join(__dirname, 'public')));


app.get(
    "/",
    (require, response) => {
        response.sendFile(path.join(__dirname, "templates/index.html"))
    }
)
app.post(
    "/mergePdf",
    upload.array("pdfs", 2),
    async (request, response) => {
        // console.log(request.files[0])
        console.log(request.files[0].path)
        console.log(request.files[1].path)
        let d = await mergePDF_Function.mergePDF_Function(path.join(__dirname,request.files[0].path),path.join(__dirname,request.files[1].path))
        response.redirect(`http://localhost:3000/static/${d}.pdf`)
        // await mergePDF_Function.mergePDF_Function(path.join(__dirname,request.files[0].path),path.join(__dirname,request.files[1].path))
        // response.redirect("http://localhost:3000/static/merged.pdf")
        // response.status(200).send(request.files)
        // await mergeFunction(path.join(__dirname, request.files[0].path),path.join(__dirname, request.files[1].path))
    }
)

let port = 3000
app.listen(
    port,
    () => {
        console.log("Application is running on port = ", port)
    }
)


/*
await merge.save(`public/${d}.pdf`)
and response.redirect(`http://localhost:3000/static/${d}.pdf`)
iska .pdf see pehela vala name should be same i.e ${d}.pdf of merge.save
and ${d}.pdf of redirect should be same
*/


