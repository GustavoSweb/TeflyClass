import _ from "lodash";

class DatesExercise {
  Format(Exercises) {
    var Dates = [];
    Exercises.forEach((Exercise_element) => {
      let date = new Date(Exercise_element.delivery).setHours(0,0,0)
      if (Exercise_element.delivery) Dates.push(date);
    });
    let FORMAT_DATE = _.uniq(Dates)
    return FORMAT_DATE
  }
}

export default new DatesExercise()
