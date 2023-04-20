import path from 'path'
import fs from 'fs'

function buildPath() {
   return path.join(process.cwd(), 'data', 'data.json')
}

function extractData(filePath) {
    const jsonData = fs.readFileSync(filePath);
    const data = JSON.parse(jsonData);
    return data;
}

export default function handler(req, res) {
    const { method } = req;

    const filePath = buildPath();
    const { events_categories, allEvents } = extractData(filePath);

    if(!allEvents) {
        return res.status(404).json({
            status: 404,
            message: 'Event data not found',
        })
    }

    if(method === 'POST') {
        const {email, eventId} = req.body;

        if(!email || !email.includes('@')){
            res.status(422).json({message: 'Invalid Email address'})
            return
        }

        const allNewEvents = allEvents.map(el => {
            if(el.id === eventId) {
                if(el.emails_registered.includes(email)){
                    res.status(409).json({message: 'This email has already been registered'})
                    return el;
                }
                return {
                    ...el, 
                    emails_registered: [...el.emails_registered, email],
                }
            }
            return el;
        });

        fs.writeFileSync(filePath, JSON.stringify({events_categories, allEvents: allNewEvents}))

        res.status(200).json({message: `You has been registered successfully`})
    }
}