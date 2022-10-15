"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
//import  sharp  from "sharp";
//----
var imagesRoute = express_1.default.Router();
imagesRoute.get('', function (req, res) {
    var filename = req.query.filename;
    res.sendFile("".concat(path_1.default.resolve('./'), "/images/").concat(filename, ".jpg"));
    //res.send(`<img src='${path.resolve('./')}/images/tote.jpg'>`);
    //res.send("hhhh");
    //   sharp(`images/${filename}.jpg`)
    //     .resize(200, 300)
    //     .toFile('output.png')
    //     .then(() => {
    //       // output.png is a 200 pixels wide and 300 pixels high image
    //       // containing a nearest-neighbour scaled version
    //       // contained within the north-east corner of a semi-transparent white canvas
    //     });
});
exports.default = imagesRoute;
