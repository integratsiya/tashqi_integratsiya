import { red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

export const selectInputStyle = makeStyles((theme) => ({
  root: {
    background: "#F3F3F4",
  },
  formControl: {
    minWidth: 310,
    background: "#F3F3F4",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  select: {
    backgroundColor: "#F1F2F5",
    padding: "8px",
    color: "#898E9A",
  },
  selectRoot: {
    "&:focus": {
      backgroundColor: "transparent",
    },
  },
}));
