const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize ,DataTypes) => {
    const User = sequelize.define(
        "user",{
            userName:{
                type:DataTypes.STRING,
                allowNULL:false
            },
            email:{
               type:DataTypes.STRING,
               allowNULL:false,
               unique:true,
               isEmail:true 
            },
            password:{
                type:DataTypes.STRING,
                allowNULL:false,
            }

        }
    , {timestamps:true},);
    
return User
}