export const getColorForGrade = (grade: string) => {
    if (['A+', 'A', 'A-'].includes(grade)) {
      return 'green';
    } else if (['B+', 'B', 'B-', 'C+', 'C', 'C-'].includes(grade)) {
      return 'blue';
    } else if (['D+', 'D', 'D-', 'F'].includes(grade)) {
      return 'red';
    }
    return 'grey'; // default color if grade is unknown
  };
  
  export const getDarkerColorForGrade = (grade: string) => {
    if (['A+', 'A', 'A-'].includes(grade)) {
      return 'darkgreen';
    } else if (['B+', 'B', 'B-', 'C+', 'C', 'C-'].includes(grade)) {
      return 'darkblue';
    } else if (['D+', 'D', 'D-', 'F'].includes(grade)) {
      return 'darkred';
    }
    return 'darkgrey'; // default color if grade is unknown
  };
  