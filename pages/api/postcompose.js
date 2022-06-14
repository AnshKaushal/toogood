import * as fs from 'fs';
export default async function  handler(req, res) {
    if (req.method === 'POST') {
      // Process a POST request 
      let data = await fs.promises.readdir('blogdata');
      fs.promises.writeFile(`blogdata/${req.body.slug}.json`, JSON.stringify(req.body))
      res.status(200).json(req)
    } else { 
      res.status(200).json(["allBlogs"]) 

    }
}