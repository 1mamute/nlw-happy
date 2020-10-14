import { getRepository } from 'typeorm';
import Orphanage from './models/Orphanage';
import { Router } from 'express';

const routes = Router();

routes.post('/orphanages', async (request, response) => {
  const {
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends,
  } = request.body;

  const orphanagesRepository = getRepository(Orphanage);

  const orphanage = orphanagesRepository.create({
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends,
  });

  await orphanagesRepository.save(orphanage);

  console.log('Sending post /orphanages!');
  console.log(request.body);

  return response.status(201).json({ message: 'Hello world' });
});

export default routes;
