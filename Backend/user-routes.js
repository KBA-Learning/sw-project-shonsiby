import { Router } from 'express';

var router = Router();
const certDetails = new Map();

router.get('/', (req, res) => {
    res.send("Hello World");
})

router.post('/issue', async (req, res) => {
    try {


        
    } catch (error) {
        console.log(error);
        res.status(500).json();
    }
})

router.get('/view/:id', async (req, res) => {
    

})

export default router;