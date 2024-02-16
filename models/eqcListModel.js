const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports=(sequelize,DataTypes)=>{
    const eqc= sequelize.define(
        "eqcList",{
            description:{
                type:DataTypes.STRING,
                allowNULL:false
            }
        },
        {timestamps:true},);
    
    return eqc;
    
}