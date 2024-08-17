import { Router } from 'express';

var router = Router();
const certDetails = new Map();

router.get('/', (req, res) => {
    res.send("Hello World");
})

router.post('/issue', async (req, res) => {
    try {
        const { certificateID, courseName, candidateName, grade, date } = req.body;
        console.log(certificateID);
        if (certDetails.has(certificateID)) {
            res.status(201).json({ message: `${certificateID} already exist` })
        }
        else {
            certDetails.set(certificateID, { courseName, candidateName, grade, date });
            console.log(certDetails.get(certificateID));
            res.status(201).json({ message: 'Certificate details saved' })
        }
   
    } catch (error) {
        console.log(error);
        res.status(500).json();
    }
})

router.get('/view/:id', async (req, res) => {
    const id1 = req.params.id;
    console.log(id1);
    const details = certDetails.get(id1);
    console.log(details);
    if (details) {
        res.json(details);
    }
    else {
        res.status(404).json({ message: 'details not found' });
    }

})

export default router;