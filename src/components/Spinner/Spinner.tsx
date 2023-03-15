import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";

interface SpinnerTypes {
  belowText?: string;
  inline?: boolean;
}

const Spinner = ({ belowText, inline }: SpinnerTypes) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        ...(inline ? { height: "auto" } : { height: "100vh" }),
      }}
    >
      <CircularProgress size={inline ? "20px" : "auto"} />
      {belowText && !inline && <p>{belowText}</p>}
    </Box>
  );
};

export { Spinner };
