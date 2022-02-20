const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
<<<<<<< HEAD
   // useCreateIndex: true,
   // useFindAndModify: false
=======
  //  useCreateIndex: true,
  //  useFindAndModify: false
>>>>>>> 999eb2d93405958b0e7d6c5443282f14b31f32a8
})
