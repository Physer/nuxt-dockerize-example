export default function (req, _res, next) {
    console.log('The custom middleware intercepted the following URL:', req.url);
    next();
}