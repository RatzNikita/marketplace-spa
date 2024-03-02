import jwt from 'jsonwebtoken'

export const DEV_SECRET = 'dev-secret'


    function auth(req: any, res: any, next: (error?: any) => void) {
        console.log('dasasd')
        const {authorization} = req.headers;
        if (!authorization || !authorization.startsWith('Bearer ')) {
            res.status(404).send({message: 'Token is not valid'})
            return;
        }
        const token = authorization.replace('Bearer ', '');
        let payload;
        try {
            payload = jwt.verify(token, DEV_SECRET);
        } catch (err) {
            next(err);
        }
        req.user = payload;
        next();
    }

export default auth