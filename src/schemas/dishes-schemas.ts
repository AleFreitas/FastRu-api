import Joi from 'joi';
import JoiDate from '@joi/date';
const JoiWithDate = Joi.extend(JoiDate);

const dishComponentSchema = Joi.object({
  name: Joi.string().required()
});

const dishSchema = Joi.object({
    main_dish:Joi.string().required(),
    salad1:Joi.string().required(),
    salad2:Joi.string().required(),
    accompaniment:Joi.string().required(),
    dessert:Joi.string().required(),
    date:JoiWithDate.date().format('DD/MM/YYYY')
})

export {dishComponentSchema,dishSchema}