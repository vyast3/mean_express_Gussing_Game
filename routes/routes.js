module.exports = function(app){
 
     app.get('/',function(req,res){
         if(!req.session.number){
             req.session.number = Math.floor(Math.random() * 100) + 1;
        } 
         var text1 = ""
        console.log(req.session.number)
        if(req.session.number > req.session.new){
             text1 = "Too Low"
        }else if(req.session.number < req.session.new){
             text1 = "Too High"
        }else if(req.session.number == req.session.new) {
             text1 = "was the number!"
        }else{
              text1 = ""
        }

         res.render('index',{text1: text1});
     })

     app.post('/check',function(req,res){
       req.session.new = req.body.number;
        res.redirect("/");
     })

    app.post('/reset', function (req, res) {
    req.session.destroy();    
    res.redirect('/')
})



} 