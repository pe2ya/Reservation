const { 
    Session
} = require('../sequelize');

async function SetSession(user, cookies)
{
    var result;
    try {
        if(cookies)
        {
            let count = await Session.count({
                where: {
                    user_id: user.id,
                    value: cookies
                } 
            })
            console.log(count)
            if(count == 0 && user)
            {
                result = await CreateSession(user)
                console.log("Create a new Session in database")
            }
            else 
            {
                await Session.update(
                    {
                        loggined: true
                    },
                    {
                        where: {
                            user_id: user.id,
                            value: cookies
                        }
                    }
                )
                result = await Session.findOne({where: {value: cookies}})
                console.log("Update an exist Session in database")  
            }
        }
        else
        {
            result = await CreateSession(user)
            console.log("Create a new Session in database\nCookies was undefind" )
        }
    } catch (err) {
        console.log(err)
    }

    return result;
}

async function DeleteSession(cookies)
{
    var result;
    try{
        let count = await Session.count({where: {value: cookies} })
        if(count > 0)
        {
            await Session.update(
                {
                    loggined: false
                },
                {
                    where: {
                        value: cookies
                    }
                }
            )
            .then((obj) => {
                result = obj;
            })
        }
        else
        {
            result = null;
        }

    } catch (err) {
        console.log(err)
    }

    return result;
}

async function CreateSession(user)
{
    var result;
    try{
        await Session.create({
            user_id: user.id,
            value: CharChain(200),
            loggined: true
        })
        .then(session => {
            result = session;
        })
    } catch (err) {
        console.log(err)
    }

    return result;
}

function CharChain(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < length; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
}

module.exports = {
    SetSession,
    DeleteSession,
    CreateSession,
    CharChain
 }