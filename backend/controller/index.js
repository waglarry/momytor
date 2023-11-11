const express = require('express')
const Child = require('../models/childrenSchema')

const hello = (req, res) => {
    return res.status(200).json({ msg: 'hello world' })
}


const findChild = async (req, res, next) => {
    const { firstName } = req.body;
    if (!firstName) {
        res.status(200).json({ message: `Please provide a name` });
    }
    try {
        const child = await Child.findOne({ firstName });
        if (!child) {
            return res.status(400).json({
                message: `There is no child by name ${child}`,
            });
        } else {
            return res.status(200).json({
                sucess: true,
                message: child,
            });
        }
    } catch (error) {
        return res.status(400).json({
            message: `An error occured`,
            error: error.message,
        });
    }
};

const addChild = async(req,res) =>{
   
    try {
        const child = await Child.create(req.body)
        return res.status(200).send('child added sucessfully')
        
    } catch (error) {
        return res.status(400).send(error.message)
    }
}

const findAllChildren = async(req,res)=>{
    try {
       const child = await Child.find ({})
        return res.status(200).json({child})
    } catch (error) {
        return res.status(400).send(error.message)
    }
}

module.exports = {
    hello,
    findChild,
    addChild,
    findAllChildren
}