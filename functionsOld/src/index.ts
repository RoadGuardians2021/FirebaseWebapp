import * as functions from 'firebase-functions';
import { connect } from './config';

import { Current } from './entity/Current';
import { Temperature } from './entity/Temperature';

export const createCurrent = functions.https.onRequest(async (request, response) => {

    const { current } = request.body;

    try {
        const connection = await connect();

        const repo = connection.getRepository(Current);

        const newCurrent = new Current();
        newCurrent.current = current;

        const savedCurrent = await repo.save(newCurrent);

        response.send(savedCurrent);

    } catch (error) {
        response.send(error)
    }

});

export const getCurrent = functions.https.onRequest(async (request, response) => {

    const connection = await connect();
    const currentRepo = connection.getRepository(Current);

    // Get all rows
    const allCurrents = await currentRepo.find();

    response.send(allCurrents);

});
export const createTemperature = functions.https.onRequest(async (request, response) => {

    const { temperature } = request.body;

    try {
        const connection = await connect();

        const repo = connection.getRepository(Temperature);

        const newTemperature = new Temperature();
        newTemperature.temperature = temperature;

        const savedTemperature = await repo.save(newTemperature);

        response.send(savedTemperature);

    } catch (error) {
        response.send(error)
    }

});

export const getTemperature = functions.https.onRequest(async (request, response) => {

    const connection = await connect();
    const temperatureRepo = connection.getRepository(Temperature);

    // Get all rows
    const allTemperatures = await temperatureRepo.find();

    response.send(allTemperatures);

});