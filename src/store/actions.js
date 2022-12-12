import { createAction } from "@reduxjs/toolkit";

export const changeStep = createAction("ui/changeStep", (step) => ({
  payload: step
}))