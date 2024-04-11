import { UserInputTracker } from "user-input-tracker";
import axios from 'axios';

const tracker = new UserInputTracker(function (aggregate: {[key: string]: any}) {
  axios.post('http://localhost:8000/attentions', {
    timestamp_start: aggregate.tsStart,
    timestamp_end: aggregate.tsEnd,
    num_keyboard_strokes: aggregate.keyTotal,
    num_mouse_clicks: aggregate.clickTotal,
    size_mouse_scroll: aggregate.scrollDelta,
    dist_mouse_movement: aggregate.movedDistance,
  })
}, 60 * 1000);

tracker.start();