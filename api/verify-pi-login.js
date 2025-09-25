import axios from "axios";

export default async function 
handler(req, res) {
if (req.method !=="POST") {
return
res.status(405).json({success: false,error: "Method not allowed" });
}

const { accessToken } = req.body;

try {

//call the API to verify the token
const response = await
axios.get("https://api.minepi.com/v2/me", {
headers: {Authorization: `Bearer ${accessToken}` }
});

const piUser = response.data; //{uid, username}
return res.status(200).json({ success:
true, user: piUser });
} catch (error) {

console.error(error.response?.data || error.message);
return
res.status(401).json({ success:
false, error: "Invalid access token" });
}
}
