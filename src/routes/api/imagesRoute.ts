import express from 'express';
import path from 'path';
import sharp from 'sharp';
//----
const imagesRoute = express.Router();

imagesRoute.get('', async (req, res) => {
  try {
    const filename = req.query.filename;
    const width: number = Number(req.query.width);
    const height: number = Number(req.query.height);

    await sharp(`images/full/${filename}.jpg`)
      .resize(width, height)
      .toFile(`images/thumb/${filename}_thumb.jpg`);

    res.sendFile(`${path.resolve('./')}/images/thumb/${filename}_thumb.jpg`);

    
  } catch (error) {
    console.log(error);
  }
});

export default imagesRoute;
