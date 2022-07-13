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

export default function Whatskills() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: purple[500] }} aria-label="skill">
            WS
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="What Skills"
        subheader="Mindfullness"
      />
      <CardMedia component="img" height="194" image="" alt="" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Observe, Describe, Participate
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

          <Typography paragraph>Observe:</Typography>
          <Typography paragraph>
            Observing is sensing or experiencing with out describing or labeling
            the experience. The benefit of this practice is that the mind
            becomes quiet and the goal is to observe without a running
            commentary of a talkative mind.
          </Typography>

          <Typography paragraph>Describe:</Typography>
          <Typography paragraph>
            Describing is simply putting words on what you observe. Describing
            skill is labeling the expereince without judgement. Using observe
            and describe skills together can help you stay present and focus on
            doing what you have to do to make your situation better.
          </Typography>
          <Typography paragraph>Participate</Typography>
          <Typography paragraph>
            Participating is entering wholly into an activity and throwing
            yourself into something completely. When you get involved in the
            moment, you let go of ruminating and self-conscious thoughts. This
            is a great tool to use when you are in distress because you
            participate in every action and feel more in control.
          </Typography>
          <Typography paragraph> Practice What Skills:</Typography>

          <Typography paragraph>
            Imagine your thoughts are like leaves on a river. Sit on the bank
            and watch them float by and you don't reach out to grab them.
          </Typography>
          <Typography paragraph>
            Place one hand on a warm surface and one hand on a cool surface.
            Notice the difference.
          </Typography>
          <Typography paragraph>
            Do one of the exercies above and add labels and descriptions to the
            experience.
          </Typography>
          <Typography paragraph>
            Keep a journal for a day or several days and record what you do and
            how you feel on paper.
          </Typography>
          <Typography paragraph>
            Try participating in an activity that you do every frequently, like
            a chore or hygiene routine. Really pay attention to the activity,
            concentrate. Notice everything about what you are doing and try to
            do it really well. What does it feel like to you?
          </Typography>
          <Typography paragraph>
            Try to balance an egg on the small side on a flat surface. The
            practice is possible but it takes pateince and focus. Let yourself
            get lost in the activity.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
