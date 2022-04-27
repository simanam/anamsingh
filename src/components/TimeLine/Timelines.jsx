import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import CodeIcon from "@mui/icons-material/Code";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import SchoolIcon from "@mui/icons-material/School";
import Typography from "@mui/material/Typography";

import "./Timelines.scss";

const Timelines = () => {
  return (
    <Timeline className="timeline" position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
          className="dates-text"
        >
          Future
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot className="timeline-dots" variant="outlined">
            <PersonSearchIcon className="icons" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography className="timeline-titles" variant="h6" component="span">
            Open to Work
          </Typography>
          <Typography className="secondary-text">
            Front End and UX/UI
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
          className="dates-text"
        >
          Current
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot className="timeline-dots" variant="outlined">
            <DesignServicesIcon className="icons" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography className="timeline-titles" variant="h6" component="span">
            Enriching UX/UI skills
          </Typography>
          <Typography className="secondary-text">
            UI/UX Design. Memorisely
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary"
          className="dates-text"
        >
          April, 2019
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot className="timeline-dots" variant="outlined">
            <LaptopMacIcon className="icons" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span" className="timeline-titles">
            Full Stack Developer
          </Typography>
          <Typography className="secondary-text">
            USPS IT Solution Center, San Mateo
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
          className="dates-text"
        >
          September, 2018
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot className="timeline-dots" variant="outlined">
            <CodeIcon className="icons" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography className="timeline-titles" variant="h6" component="span">
            Software Development Bootcamp
          </Typography>
          <Typography className="secondary-text">
            3 Stacks, Coding Bootcamp. Coding Dojo, San Jose
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
          className="dates-text"
        >
          July, 2017
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot className="timeline-dots" variant="outlined">
            <SupportAgentIcon className="icons" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography className="timeline-titles" variant="h6" component="span">
            Technial Support
          </Typography>
          <Typography className="secondary-text">
            Barracuda Networks, San Jose
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
          className="dates-text"
        >
          June, 2017
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot className="timeline-dots" variant="outlined">
            <SchoolIcon className="icons" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography className="timeline-titles" variant="h6" component="span">
            Graduated
          </Typography>
          <Typography className="secondary-text">
            B.S. (Management Information System) San Jose State University
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default Timelines;
