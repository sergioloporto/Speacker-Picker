import { useState } from "react";
import { MuiChipsInput } from "mui-chips-input";
import uuid from "react-uuid";
import { Alert, Typography } from "@mui/material";
import moment from "moment";
import { Box } from "@mui/system";

const getNamesFromLocalStorage = () => {
  const getNames = localStorage.getItem("listOfNames");
  if (!getNames) {
    return [];
  }
  const receivedNames = JSON.parse(getNames);

  return receivedNames as string[];
};

const InsertNames = () => {
  const [chips, setChips] = useState<string[]>(getNamesFromLocalStorage());

  const chosenNames = chips.join(", ");
  const date = new Date();
  const day = date.getDate();
  const today = Number(moment().format("D"));

  const getDays = moment().daysInMonth();
  const getDayInWord = (specificDay: number | undefined) =>
    new Date(date.getFullYear(), date.getMonth(), specificDay);
  const isWeekend = (day: number) => {
    return moment(getDayInWord(day)).format("dddd") === "Saturday" ||
      moment(getDayInWord(day)).format("dddd") === "Sunday"
      ? true
      : false;
  };

  const winnersUntilToday = [...Array(day).keys()].map(
    (_, i) => getNamesFromLocalStorage()[i % getNamesFromLocalStorage().length]
  );

  let nextPersonIndex = -1;

  const winnersForTheMonth = [...Array(getDays).keys()].map((_, i) => {
    if (isWeekend(i + 1)) {
      return undefined;
    }
    nextPersonIndex++;

    if (nextPersonIndex === getNamesFromLocalStorage().length) {
      nextPersonIndex = 0;
    }

    return getNamesFromLocalStorage()[nextPersonIndex];
  });

  console.log("winnersForTheMonth", winnersForTheMonth);

  const handleChange = (newChips: string[]) => {
    const sortNames = newChips.sort();
    setChips(sortNames);
    localStorage.setItem("listOfNames", JSON.stringify(sortNames));
  };

  return (
    <>
      Your chosen names:
      <Typography variant="subtitle2" component="h2">
        {chosenNames}
      </Typography>
      <Typography variant="subtitle2" component="h2">
        *Automatically reordered alphabetically
      </Typography>
      <MuiChipsInput
        value={chips}
        onChange={handleChange}
        sx={{ color: "white", background: "#ffffff", mt: "30px" }}
      />
      {chosenNames.length > 0 && (
        <Box sx={{ textAlign: "center" }}>
          <Alert severity="success" sx={{ margin: "30px" }}>
            {" "}
            Today's presenter is {winnersForTheMonth[new Date().getDate() - 1]}
          </Alert>
          {winnersForTheMonth.map((el, i) => {
            const todayNumber = i + 1;
            const tomorrowNumber = i + 2;

            return (
              <Typography
                variant="body1"
                component="h2"
                key={uuid()}
                sx={{
                  ...(today === todayNumber && {
                    color: "green",
                    bgcolor: "background.paper",
                  }),
                  ...(today + 2 === tomorrowNumber && {
                    color: "orange",
                    bgcolor: "background.paper",
                  }),
                }}
              >
                {`${moment().format("MMMM")} ${todayNumber} => ${
                  isWeekend(todayNumber) ? "weekend" : el
                }`}
              </Typography>
            );
          })}
        </Box>
      )}
    </>
  );
};
export { InsertNames };
