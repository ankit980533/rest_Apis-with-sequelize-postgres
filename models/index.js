const { Sequelize, DataTypes } = require("sequelize");


const sequelize= new Sequelize(`postgres://postgres:Ankit@1908@localhost:5432/postgres`, {dialect: "postgres"});


sequelize.authenticate().then(()=>{
console.log("connected successfullly");
console.log("hgeeiiii");
})
.catch((err)=>{
    console.log(err);
    console.log("hgiiii");
})
const db={}
db.sequelize=sequelize
db.Sequelize=Sequelize

db.user=require('./userModel')(sequelize,DataTypes);
db.eqc=require('./eqcListModel')(sequelize,DataTypes);

db.user.hasMany(db.eqc);
db.eqc.belongsTo(db.user);
 
 
module.exports=db