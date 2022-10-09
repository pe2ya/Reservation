function Getcookies(req) {
    var cookie = req.headers.cookie;
    if(cookie)
    {
        var result = cookie.split('; ');
        return result
    }

    return null
}

function GetcookieByName(req, name)
{
    var cookies = Getcookies(req);
    var result;

    if(cookies)
    {
        for(let i = 0; cookies.length; i++)
        {
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
    return result;
}

module.exports = { 
    Getcookies,
    GetcookieByName
};