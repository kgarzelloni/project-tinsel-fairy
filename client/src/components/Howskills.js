import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { purple } from "@mui/material/colors";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import MoreVertIcon from "@mui/icons-material/MoreVert";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Howskills() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: purple[500] }} aria-label="skill">
            HS
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="How Skills"
        subheader="Mindfullness"
      />
      <CardMedia component="img" height="194" image="" alt="" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         One-Mindfully, Non-Judgementally, Effectively
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton> */}
        {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph> Skill Detail:</Typography>

          <Typography paragraph>One-Mindfully:</Typography>
          <Typography paragraph>
     One-mindfully is the skill of doing one thing at a time. It is the opposite of mult-tasking. If you are eating, eat. Be mindfull about it without reading or watching TV. If you are working, work. Try to focus only on one task at a time without worrying about something else at the same time. When you are having a conversation, fully engage with that person without being on your phone at the same time. This brings quality awareness to what we are doing and experiencing, being in the here and now. 
          </Typography>

          <Typography paragraph>Non-Judgementally:</Typography>
          <Typography paragraph>
           Non-judgementally is....
          </Typography>
          <Typography paragraph>Effectively</Typography>
          <Typography paragraph>
            Effectively is...
          </Typography>
          <Typography paragraph> Practice How Skills:</Typography>

          <Typography paragraph>
            Watch for situations in your life when you are doing more than one task at the same time. Practice techniques for concentrating on one task at a time. Notice times that you are one-mindfully paying attention to just one thing, how does it feel?
          </Typography>
          <Typography paragraph>
            When doing a mundane task, try observing and describing as you complete the task. Notice when your mind begins to make a judgement and let the judgement go. 
          </Typography>
          <Typography paragraph>
            Are you holding onto a grudge in your life? Are you benefiting from holding this grudge? Reassess the situation and consider ways to find an effective solution. 
          </Typography>
          <Typography paragraph>
            Keep a journal for a day or several days and record what you do and
            how you feel on paper.
          </Typography>
          
        
        </CardContent>
      </Collapse>
    </Card>
  );
}
