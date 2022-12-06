import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../../../Utils/Constants";
import { borderRadius, textAlign } from "@mui/system";

const ChannelCard = ({channelDetail}) => {
  return (
    <Box
    sx={{ boxShadow:'none', borderRadius:'20px'}}>
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
    <CardContent
    sx={{display:'flex', flexDirection:'column', justifyContent:'center',
    textAlign:'center' , color:'#fff'}}>
    <CardMedia />

    </CardContent>

    </Link>

    </Box>
  )
}

export default ChannelCard