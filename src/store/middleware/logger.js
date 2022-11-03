//middleware - это cредняя ступень, которая отрабатывает отправку action'a в reducer, MW может подменить, пропустить или прервать этот путь
export const logger = (store) => (next) => (action) => {
  console.log("Action", action.type);
  return next(action); //Возврат action'a
}; //Это каррирование
