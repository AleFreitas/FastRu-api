import Joi from 'joi';
import JoiDate from '@joi/date';
const JoiWithDate = Joi.extend(JoiDate);

const dishComponentSchema = Joi.object({
    name: Joi.string().required()
});

const dishSchema = Joi.object({
    main_dish: Joi.string().required(),
    salad1: Joi.string().required(),
    salad2: Joi.string().required(),
    accompaniment: Joi.string().required(),
    dessert: Joi.string().required(),
    date: JoiWithDate.date().format('DD/MM/YYYY').required()
})

const updateDishSchema = Joi.object({
    chosenDate: JoiWithDate.date().format('DD/MM/YYYY').required(),
    name: Joi.string().required()
});

const updateSaladSchema = Joi.object({
    chosenDate: JoiWithDate.date().format('DD/MM/YYYY').required(),
    name: Joi.string().required(),
    saladOption: Joi.number().required()
});

export { dishComponentSchema, dishSchema, updateDishSchema, updateSaladSchema }