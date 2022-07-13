import React from "react";
import { Paper } from "@mui/material";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  Appointments,
  AllDayPanel,
  CurrentTimeIndicator,
  Resources,
  Toolbar,
} from "@devexpress/dx-react-scheduler-material-ui";
import { appointments } from "../Data/Data";

const CalendarScreen = () => {
  const currentDate = new Date();

  return (
    <Paper>
      <Scheduler data={appointments}>
        <ViewState currentDate={currentDate} />
        <WeekView startDayHour={12} endDayHour={24} />
        <Appointments />
        <Toolbar />
        <CurrentTimeIndicator />
        <Resources />
        <AllDayPanel />
      </Scheduler>
    </Paper>
  );
};

export default CalendarScreen;
