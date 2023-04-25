
//Getcookies accepts a request object and returns an array of cookies found in the headers of the request.
function Getcookies(req) {
    var cookie = req.headers.cookie;
    if(cookie)
    {
        var result = cookie.split('; ');
        return result
    }

    return null
}

/*
 * function GetcookieByName accepts a request object and the name of the cookie to retrieve,
   then iterates through the array of cookies obtained from Getcookies and returns the value of
   the cookie with the specified name if found.
 * @param {*} req  - request from user
 * @param {*} name  - name of cookies
 * @returns value of cookies
 */
function GetcookieByName(req, name)
{
    var cookies = Getcookies(req);
    var result;

    if(cookies)
    {
        for(let i = 0; i < cookies.length; i++)
        {
            if(cookies[i]) {
            
                el = cookies[i];
                if(el.includes(name))
                {
                    var split = el.split("=");
                    result = split[1];
                    // console.log(result)
                    break;
                }
            }
        }
    }
    return result;
}

module.exports = { 
    Getcookies,
    GetcookieByName
};