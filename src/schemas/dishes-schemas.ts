import Joi from 'joi';

const dishComponentSchema = Joi.object({
  name: Joi.string().required()
});

export {dishComponentSchema}