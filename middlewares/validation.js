module.exports.validation=(req,res,next)=>{
    const { title,  date, rating, des, img } = req.body;
    if(title && date && rating && des && img )
    {
        next();
    }else{
        return res.redirect('/add_movie');
    }
}